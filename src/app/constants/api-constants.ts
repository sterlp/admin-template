export class ApiConstants {
    public static get baseURL(): string { return "https://home.stemmons.com/CasesAPI/"; }
    public static get ApiUserName(): string { return "Stemmons_API"; }
    public static get ApiPassword(): string { return "$CpBYS8OPx"; }
    public static get ApiGrantType(): string { return "password"; }
    public static get CaseListURL(): string { return "/api/Cases/GetCaseList?user=ankit.vpatel@boxerproperty.com&TenantID=''&CaseTypeID=1070&strCaseIDs=&CaseOwnerSAM=&AssignedToSAM=&ClosedBySAM=&CreatedBySAM=&PropertyID=&TenantCode=&showOpenClosedCasesType=o&showPastDueDate=n&SearchQuery="; }
    public static get CaseTypeBasicInfo(): string { return "/api/Cases/GetCaseType?user='ankit.vpatel@stemmons.com'&CaseTypeId=1070"; }
    public static get CaseTypeAssoc(): string { return "/api/Cases/GetTypesByCaseTypeID?user='ankit.vpatel@stemmons.com'&caseType=1070"; }
    public static get GetEmployeesBySearch(): string { return "/api/Cases/GetEmployeesBySearch?name="; }
    public static get CreateCase(): string { return "/api/Cases/CreateCaseOptimized"; }
    public static get GetAssocDecode(): string { return "/api/Cases/GetAssocDecode?assocTypeID="; }
    public static get GetExternalDataSourceValue(): string { return "/api/Cases/GetTypeValuesByAssocCaseTypeExternalDS"; }

}
