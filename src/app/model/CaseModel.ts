import { CaseAssoc } from "./case-assoc";

export interface CaseModel {
   id : number;
   caseTitle:string;
   caseTypeId:number;
   assignTo:string;
   currentUser:string;
   assoc:CaseAssoc[];
   createdBy:string;
   createdDateTime:Date;
   modifiedBy:string;
   modifiedDateTime:Date;
}
