export interface CaseAssoc {
        AssocTypeId: number;
        AssocFieldType: string;
        CaseTypeId: number;
        Name: string;
        Description: string;
        ExternalDataSourceId: number;
        SystemCode?: string;
        SystemPriority: number;
        ShowOnList?: any;
        IsRequired: string;
        IsActive: string;
        CreatedDateTime: Date;
        CreatedBy: string;
        ModifiedDateTime: Date;
        ModifiedBy: string;
        SeparatorCharacter?: string;
        ExternalDataSourceEntityTypeId: number;
        Text:string;
        Value:string;
    
}