export interface EdsDataSouceModel {
    AssocDecodeID: number;
    AssocTypeID: number;
    CaseTypeID: number;
    CaseTypeDesc: string;
    ObjectID?: any;
    ObjectCode?: any;
    Name: string;
    TextValue?: any;
    Description: string;
    GLCode?: any;
    MiscCode1Desc?: any;
    MiscCode1Value?: any;
    MiscCode2Desc?: any;
    MiscCode2Value?: any;
    SystemCode?: any;
    SystemPriority?: any;
    IsActive: string;
    StatusMTTRAffecting?: any;
    CreatedDateTime: Date;
    CreatedBy?: any;
    ModifiedDateTime: Date;
    ModifiedBy?: any;
    ItemPropertyBag: string;
    IsRequired: boolean;
    Child: number;
    Parent: number;
  }