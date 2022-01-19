import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiConstants } from '../constants/api-constants';




@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

   token:string='';
   tokenExpireDate:Date= new Date();
   accessTokenObj : any=null;

  constructor(private http: HttpClient) { }

  public get(url:string): Observable<any> {
    return this.http.get(ApiConstants.baseURL + url).pipe(map(res => res));
    
  }

  public post(url:string,obj:any): Observable<any> {
    //return this.http.post(API_URL + url,obj).pipe(map(res => res));

    return this.http
      .post(ApiConstants.baseURL+ url, obj)
      .pipe(
        map((res) => res));
  }

  public getToken():Observable<any>{

    localStorage.setItem('sso_token','WT8O51FZGcNuhcgeAmiwptrp0ITRvNe9DkxXJWfVLDpxnZMUIUpVPeZNTRdvyii6Y9qZNqflsPltIRGSoSQKbK5wFwJDf9Xbz9hjKMv9h18Jj9Wq0o1Kr2WPuuk1X4g0oKo9LIz22kigoW0rjwFB7O5LiawEk89cbkmpBIE3GSm9LrquunXb0e54SBJRPE-CdOsF1Q')
     var tokenReq={
       username:ApiConstants.ApiUserName,
       password:ApiConstants.ApiPassword,
       grant_type:ApiConstants.ApiGrantType,
     }
     const body = new HttpParams()
    .set('username', tokenReq.username)
    .set('password', tokenReq.password)
    .set('grant_type',tokenReq.grant_type);
    
    
     let aa = this.http.post(ApiConstants.baseURL+'token', body.toString());
    
  if(aa !=null){
        aa.subscribe(res=>{
          this.accessTokenObj=res;
          this.token=this.accessTokenObj.access_token;
          this.tokenExpireDate= new Date();
          //this.tokenExpireDate.setSeconds(this.tokenExpireDate.getSeconds()+this.accessTokenObj.expires_in);
          localStorage.setItem('sso_token',this.token)
          //console.log('date:',  this.tokenExpireDate);
          //console.log('data response', res);
        })
      }
     return aa;
      
  }




}
