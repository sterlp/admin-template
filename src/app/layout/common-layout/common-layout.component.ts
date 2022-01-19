import { Component, OnInit } from '@angular/core';
import { Global } from '../../constants/globals';

@Component({
  selector: 'app-common-layout',
  templateUrl: './common-layout.component.html',
  styleUrls: ['./common-layout.component.scss']
})
export class CommonLayoutComponent implements OnInit {

  currrentpage:string='';
  constructor() { }

  ngOnInit(): void {
    this.currrentpage=Global.currentPage;
  }

}
