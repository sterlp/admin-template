export interface CreateCaseOptimized{
    caseTitle: string;
    caseType: number;
    assignTo: string;
    currentUser: string;
    metaDataValues: any;
    caseNotes: string;
    textValues: TextValue[];
    linkValues: any[];
}


export interface TextValue {
    Key: number;
    Value: string;
}
export class MetaData {
    keypair: Dictionary<string> = {};
}

export interface Dictionary<T> {
    [Key: string]: T;
}