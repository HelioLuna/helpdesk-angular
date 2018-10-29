import { UserService } from './../../services/user.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Route, Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanLoad } from '@angular/router';
import { SettingsService } from './../../services/settings.service';

@Injectable()
export class AuthGuard implements CanActivate {

  public settings: SettingsService;
  
  constructor(private userService: UserService,
              private router: Router) { 
                this.settings = SettingsService.getInstance();
  }
  
  canActivate(
      route: ActivatedRouteSnapshot, 
      state: RouterStateSnapshot): Observable<boolean> | boolean {
    if(this.settings.isLoggedIn()){
        return true;
    }
    this.router.navigate(['/login']);
    return false;
  }

}