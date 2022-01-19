import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ReplaySubject, Subject } from 'rxjs';
import { ApiConstants } from 'src/app/constants/api-constants';
import { AssocCaseTypeExternalDS } from 'src/app/model/Api-Model/AssocCaseTypeExternalDS';
import { EdsDataSouceModel } from 'src/app/model/EdsDataSouceModel';
import { DataServiceService } from 'src/app/service/data-service.service';

import {MatDialog} from '@angular/material/dialog';
import { DialogModelComponent } from '../dialog-model/dialog-model.component';

@Component({
  selector: 'app-case-lookup',
  templateUrl: './case-lookup.component.html',
  styleUrls: ['./case-lookup.component.scss']
})
export class CaseLookupComponent implements OnInit {
  @Input() assoc:any;
  @Input() form1: any;
  value = 'Clear me';
    dataSouce:EdsDataSouceModel[] | undefined;

    /** control for the selected bank for server side filtering */
    public bankServerSideCtrl: FormControl = new FormControl();
  
    /** control for filter for server side. */
    public bankServerSideFilteringCtrl: FormControl = new FormControl();
  
    /** indicate search operation is in progress */
    public searching = false;
  
    /** list of banks filtered after simulating server side search */
    public  filteredServerSideBanks: ReplaySubject<EdsDataSouceModel[]> = new ReplaySubject<EdsDataSouceModel[]>(1);
  
    /** Subject that emits when the component has been destroyed. */
    protected _onDestroy = new Subject<void>();
    
    
  constructor(private dataService: DataServiceService,public dialog: MatDialog) { }

  ngOnInit(): void {

   
      this.bankServerSideFilteringCtrl.valueChanges.subscribe(selectedValue => {
        if(selectedValue.length<3){
          return
        }
        
        let filtered =this.dataSouce?.filter(item => item.Name.toLowerCase().indexOf(selectedValue.toLowerCase()) > -1);
        this.filteredServerSideBanks.next(filtered);
        //this.getCaseTypeAssoc(selectedValue);
        
      });
      this.loadTypeValuesByAssocCaseTypeExternalDS(this.assoc.AssocTypeId,this.assoc.CaseTypeId,this.assoc.Name,this.assoc.ExternalDataSourceId);
        
      
  }


  getCaseTypeAssoc(search :string){
   
    this.searching = true;
    this.dataService.get(ApiConstants.GetEmployeesBySearch+search).subscribe(res => {
      this.dataSouce = <EdsDataSouceModel[]>res.ResponseContent;
      this.searching = false;
    
      this.filteredServerSideBanks.next(this.dataSouce);
      console.log('Assoc', this.dataSouce);
    },error=>{
      console.log('something went wrong');
    });

  }

  loadTypeValuesByAssocCaseTypeExternalDS(assocTypeID:number,assocCaseTypeID:number,caseTypeDesc:string,externalDataSourceID:number){
    let edsRequestModel:AssocCaseTypeExternalDS = {
      caseTypeID: assocCaseTypeID,
      assocCaseTypeID: assocTypeID,
      caseTypeDesc: caseTypeDesc,
      externalDataSourceID: externalDataSourceID,
      currentValues: {}
    }
    console.log(JSON.stringify(edsRequestModel))
    this.dataService.post(ApiConstants.GetExternalDataSourceValue,edsRequestModel).subscribe(res => {
      this.dataSouce = res.ResponseContent;
      this.searching = false;
    
      //this.filteredServerSideBanks.next(this.dataSouce);
      console.log('Assoc', this.dataSouce);
    },error=>{
      console.log('something went wrong');
    });
  }


  checkError = (errorName: string) => {
    if(this.form1){
      return this.form1.controls[this.assoc.Name].hasError(errorName);
    }
    return "";
  }

  openDialog() {
    const dialogRef =this.dialog.open(DialogModelComponent, {
      data: {assoc: this.assoc,form1:this.form1 },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      if(result)
        this.assoc = result.data;
    });
  }
}
