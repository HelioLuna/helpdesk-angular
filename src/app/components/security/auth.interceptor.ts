import { SettingsService } from '../../services/settings.service';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpEvent, HttpRequest } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    settings : SettingsService;
    constructor() { 
          this.settings = SettingsService.getInstance();
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>  {
        let authRequest : any;
        if(this.settings.isLoggedIn()){
            authRequest = req.clone({
                setHeaders: {
                    'Authorization' : this.settings.token
                }
            });
            return next.handle(authRequest);
        } else {
            return next.handle(req);
        }
    }

}