import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-case-text',
  templateUrl: './case-text.component.html',
  styleUrls: ['./case-text.component.scss']
})
export class CaseTextComponent implements OnInit {
  @Input() assoc:any;
  @Input() form1: any;

  constructor(){}


  ngOnInit(): void {
    console.log('Assoc',this.assoc);
    
  }
  public checkError = (errorName: string) => {
    if(this.form1){
      return this.form1.controls[this.assoc.Name].hasError(errorName);
    }
    return "";
  }

}
