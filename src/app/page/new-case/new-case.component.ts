import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CaseAssoc } from 'src/app/model/case-assoc';
import { CaseModel } from 'src/app/model/CaseModel';
import { CreateCaseOptimized, MetaData, TextValue} from 'src/app/model/Api-Model/CreateCaseOptimized';
import {DataServiceService} from 'src/app/service/data-service.service'
import { ApiConstants } from '../../constants/api-constants';
import { Global } from '../../constants/globals';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-new-case',
  templateUrl: './new-case.component.html',
  styleUrls: ['./new-case.component.scss']
})
export class NewCaseComponent implements OnInit {

  caseTypeId:number =0;
  isLoading: boolean=false;
  casebasicInfo?: any;
  CaseTypeAssocList:any;
  
  CaseModelNew = new FormGroup({});
  CardTitle: any;
 
  constructor(private route: ActivatedRoute,private dataService: DataServiceService) { 
   
  }

  ngOnInit(): void {
    Global.currentPage="New Case";

    this.route.queryParams.subscribe(
      params => {
       this.caseTypeId=parseInt(params['id']);
      console.log(this.caseTypeId);
      }
    );

    if(this.caseTypeId>0){
      this.GetCaseTypeInfo(this.caseTypeId);
    }
  }

  GetCaseTypeInfo(caseTypeId :number){
    this.isLoading=true;
    this.dataService.get(ApiConstants.CaseTypeBasicInfo).subscribe(res => {
      this.casebasicInfo = res.ResponseContent;
      this.CardTitle=this.casebasicInfo.InstanceName;
      this.isLoading=false;
      this.getCaseTypeAssoc(caseTypeId);
      console.log('data response', this.casebasicInfo);
     
    },error=>{
      console.log('something went wrong');
    }
    );
    
  }

  getCaseTypeAssoc(caseTypeId :number){
    this.isLoading=true;
    this.dataService.get(ApiConstants.CaseTypeAssoc).subscribe(res => {
      this.CaseTypeAssocList = <CaseAssoc[]>res.ResponseContent;
      for (let item of this.CaseTypeAssocList) {
        
        this.CaseModelNew.addControl(item.Name, new FormControl(item.Text));
        if(item.IsRequired=='Y'){
          this.CaseModelNew.controls[item.Name].setValidators(Validators.required);
        }
        
      }
     
      
      console.log('Assoc', this.CaseTypeAssocList);
      this.isLoading=false;
    },error=>{
      console.log('something went wrong');
    }
    );

    
  }

 
  onSave() {
    debugger;
      // stop here if form is invalid
      if (this.CaseModelNew.invalid) {
          return;
      }
      for (const name in this.CaseModelNew.controls) {
        if (this.CaseModelNew.controls[name].invalid) {
          return;
        }
      }
      //Fill Data in CaseNewModel
      this.fillDataInOrderForm();

      
  }

  fillDataInOrderForm(){

    for(let item of this.CaseTypeAssocList){
      item.Text= this.CaseModelNew.controls[item.Name].value;
   };

     let caseModel:CaseModel = {
       caseTypeId: this.caseTypeId,
       caseTitle: 'Test 1',
       assignTo: 'Ankit.VPatel@Stemmons.com',
       currentUser: 'Ankit.VPatel@Stemmons.com',
       createdBy: 'Ankit.VPatel@Stemmons.com',
       createdDateTime: new Date(),
       assoc: this.CaseTypeAssocList,
       id: 0,
       modifiedBy: '',
       modifiedDateTime: new Date()
     }
     
    let textValue=[];
    var metaData = new MetaData();
    
    for(let item of this.CaseTypeAssocList){

      if(item.AssocFieldType=="E" || item.AssocFieldType=="O" || item.AssocFieldType=="D"){
        metaData.keypair[item.AssocTypeId] = item.Text;
        
      }
      if(item.AssocFieldType=="T" || item.AssocFieldType=="N" || item.AssocFieldType=="X" ){
        let val :TextValue={Key:item.AssocTypeId,Value:item.Text};
        textValue.push(val); 
      }
      if(item.AssocFieldType=="A"){
        let date=new Date(item.Text);
        let datestring = formatDate(date, 'yyyy-MM-dd','en-US');
        let val :TextValue={Key:item.AssocTypeId,Value:datestring};
        textValue.push(val); 
      }
    }
 
    console.log(JSON.stringify(metaData.keypair));
      //if all Good Then Insert into Database
    let caseModelAPI:CreateCaseOptimized={

       caseType:caseModel.caseTypeId,
       caseTitle:caseModel.caseTitle,
       assignTo:caseModel.assignTo,
       currentUser: caseModel.assignTo,
       metaDataValues:metaData.keypair,
       textValues:textValue,
       linkValues:[],
       caseNotes:''
    }
    console.log(JSON.stringify(caseModelAPI))
    this.dataService.post(ApiConstants.CreateCase,caseModelAPI).subscribe(res => {
      let caseId = <CaseAssoc[]>res.ResponseContent;
      alert("Case is Created : "+caseId)
    });

  

  }
}