import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {CaselistComponent} from '../caselist/caselist.component'

@Component({
  selector: 'app-case-list-ribbon',
  templateUrl: './case-list-ribbon.component.html',
  styleUrls: ['./case-list-ribbon.component.scss']
})
export class CaseListRibbonComponent implements OnInit {
  @Output("parentFun") parentFun: EventEmitter<any> = new EventEmitter();
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  RefreshCaseList(){
    this.parentFun.emit();
  }

  openNewCaseDialog() {
    const dialogRef = this.dialog.open(CaselistComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
