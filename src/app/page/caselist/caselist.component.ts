import { Component, OnInit, ViewChild } from '@angular/core';
import {DataServiceService} from 'src/app/service/data-service.service'
import { ApiConstants } from '../../constants/api-constants';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { TableDataSource, TableItem } from '../../model/TableItem';


@Component({
  selector: 'app-caselist',
  templateUrl: './caselist.component.html',
  styleUrls: ['./caselist.component.scss'],
})
export class CaselistComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  
  caseList?: any;
  isLoading: boolean=false;
  dataSource?: any;
  
  displayedColumns = ['CaseID', 'CaseTitle','CaseTypeName','CaseAssignedToDisplayName','CaseLifeDHM','CaseOwnerDisplayName'];
  
  constructor(private dataService: DataServiceService) { }

  ngOnInit(): void {
    //this.dataService.getToken();
    this.getCaseList();
    
  }


  getCaseList(){
    this.isLoading=true;
    this.dataService.get(ApiConstants.CaseListURL).subscribe(res => {
      this.caseList = res.ResponseContent;
      debugger;
      this.dataSource=new MatTableDataSource<CaseListGrid>(this.caseList)
      this.isLoading=false;
      console.log('data response', this.caseList);
     
    },error=>{
     debugger;
     if(error.status==401){
      
      this.dataService.getToken();
     }
      console.log('something went wrong');
    }
    );
  }

}

export interface CaseListGrid {
  CaseTitle: string;
  CaseID: number;
  CaseTypeName: string;
  CaseAssignedToDisplayName: string;
  CaseLifeDHM: string;
  CaseOwnerDisplayName: string;
}


