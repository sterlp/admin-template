import { Component, Inject, Input, OnInit, Optional } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ReplaySubject } from 'rxjs';
import { ApiConstants } from 'src/app/constants/api-constants';
import { AssocCaseTypeExternalDS } from 'src/app/model/Api-Model/AssocCaseTypeExternalDS';
import { EdsDataSouceModel } from 'src/app/model/EdsDataSouceModel';
import { DataServiceService } from 'src/app/service/data-service.service';
import { VoiceRecognitionService } from 'src/app/service/voice-recognition.service';

declare const annyang: any;

@Component({
  selector: 'app-dialog-model',
  templateUrl: './dialog-model.component.html',
  styleUrls: ['./dialog-model.component.scss']
})
export class DialogModelComponent implements OnInit {
  @Input() assoc:any;
  @Input() form1: any;
  isSearching:boolean=false;

  dataSouce:EdsDataSouceModel[] | undefined;

  /** list of Eds filtered after simulating server side search */
  public  filteredServerSideBanks: ReplaySubject<EdsDataSouceModel[]> = new ReplaySubject<EdsDataSouceModel[]>(1);
  
  constructor(public dialogRef: MatDialogRef<DialogModelComponent>, @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
  private voiceRecognitionService:VoiceRecognitionService,private dataService: DataServiceService,) {
     this.assoc= data.assoc;
     this.form1= data.form1;
   }

  ngOnInit(): void {
    this.voiceRecognitionService.getNewVoiceText().subscribe(text=>{
      if(text){
        this.form1.controls[this.assoc.Name].setValue(text);
        this.isSearching=false;
        if(annyang){
          annyang.abort();
        }
       this.searchItem(text);
      }
      
    });

    this.loadTypeValuesByAssocCaseTypeExternalDS(this.assoc.AssocTypeId,this.assoc.CaseTypeId,this.assoc.Name,this.assoc.ExternalDataSourceId);
  }

  
  closeDialog() {
    this.dialogRef.close({ event: 'close', data: this.assoc });
  }
  loadText(){
    this.isSearching=true;
    let voiceText:any;

    if (annyang) {
			let commands = {
				'demo-annyang': () => { }
			};

			annyang.addCommands(commands);

      voiceText=this.voiceRecognitionService.initializeVoiceRecognitionCallback();
      console.log(voiceText);

			annyang.start({ autoRestart: false });
		}


    this.voiceRecognitionService.initializeVoiceRecognitionCallback();

    setTimeout(() => {
      if(annyang){
        annyang.abort();
      }
      this.isSearching=false;

     }, 3000);
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
     
    
      //this.filteredServerSideBanks.next(this.dataSouce);
      console.log('Assoc', this.dataSouce);
    },error=>{
      console.log('something went wrong');
    });
  }

  selectItem(val:string){
    this.form1.controls[this.assoc.Name].setValue(val);
    this.closeDialog();
  }

  searchButtonClick(){
    this.searchItem(this.form1.controls[this.assoc.Name].value);
  }
  searchItem(text:string){
    let filtered =this.dataSouce?.filter(item => item.Name.toLowerCase().indexOf(text.toLowerCase()) > -1);
        this.filteredServerSideBanks.next(filtered);
  }
}


