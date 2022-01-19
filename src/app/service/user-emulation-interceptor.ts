import { HttpEvent, HttpHandler, HttpInterceptor, HttpParams, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";


@Injectable()
export class UserEmulationInterceptor implements HttpInterceptor {

    token:string='';
    tokenExpireDate:Date= new Date();
    accessTokenObj : any=null;
    http: any;

    constructor() {
        this.token=localStorage.getItem('sso_token')??"";
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (this.token) {
            const modReq = req.clone({
                setHeaders: {
                    'Authorization': "Bearer "+this.token
                }
            });
            return next.handle(modReq);
        }
        else{}
        return next.handle(req);
    }
    
}
