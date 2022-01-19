import { Component, Input, OnInit } from '@angular/core';
import { ApiConstants } from 'src/app/constants/api-constants';
import { AssocCaseTypeExternalDS } from 'src/app/model/Api-Model/AssocCaseTypeExternalDS';
import { DecodeModel } from 'src/app/model/DecodeModel';
import { DataServiceService } from 'src/app/service/data-service.service';

@Component({
  selector: 'app-case-select',
  templateUrl: './case-select.component.html',
  styleUrls: ['./case-select.component.scss']
})
export class CaseSelectComponent implements OnInit {
  @Input() assoc:any;
  @Input() form1: any;
  decode:any;
  dataSouce:any;
  isLoading:boolean=false;
  constructor(private dataService: DataServiceService) { }

  ngOnInit(): void {
    if(this.assoc.AssocFieldType=='D'){
      this.loadAssocDecode(this.assoc.AssocTypeId)
    }
    else if(this.assoc.AssocFieldType=='E'){
      this.loadTypeValuesByAssocCaseTypeExternalDS(this.assoc.AssocTypeId,this.assoc.CaseTypeId,this.assoc.Description,this.assoc.ExternalDataSourceId)
    }
  }

  public checkError = (errorName: string) => {
    if(this.form1){
      return this.form1.controls[this.assoc.Name].hasError(errorName);
    }
    return "";
  }

  loadAssocDecode(assocTypeID:number){
    this.isLoading = true;
    this.dataService.get(ApiConstants.GetAssocDecode+assocTypeID).subscribe(res => {
      this.decode = <DecodeModel[]>res.ResponseContent;
      this.isLoading = false;
      console.log('Assoc', this.decode);
    },error=>{
      console.log('something went wrong');
    });
  }

  loadTypeValuesByAssocCaseTypeExternalDS(assocTypeID:number,assocCaseTypeID:number,caseTypeDesc:string,externalDataSourceID:number){
    this.isLoading = true;
    let edsRequestModel:AssocCaseTypeExternalDS = {
      caseTypeID: assocCaseTypeID,
      assocCaseTypeID: assocTypeID,
      caseTypeDesc: caseTypeDesc,
      externalDataSourceID: externalDataSourceID,
      currentValues: {}
    }

    this.dataService.post(ApiConstants.GetExternalDataSourceValue,edsRequestModel).subscribe(res => {
      this.dataSouce = res.ResponseContent;
      this.isLoading = false;
      console.log('Assoc', this.decode);
    },error=>{
      console.log('something went wrong');
    });
  }

}
