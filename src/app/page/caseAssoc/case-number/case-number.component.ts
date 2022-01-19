import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-case-number',
  templateUrl: './case-number.component.html',
  styleUrls: ['./case-number.component.scss']
})
export class CaseNumberComponent implements OnInit {
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
