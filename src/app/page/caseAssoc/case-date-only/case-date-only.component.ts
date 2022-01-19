import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-case-date-only',
  templateUrl: './case-date-only.component.html',
  styleUrls: ['./case-date-only.component.scss']
})
export class CaseDateOnlyComponent implements OnInit {
  @Input() assoc:any;
  @Input() form1: any;
  
  constructor() { }

  ngOnInit(): void {
  }

  public checkError = (errorName: string) => {
    if(this.form1){
      return this.form1.controls[this.assoc.Name].hasError(errorName);
    }
    return "";
  }

}
