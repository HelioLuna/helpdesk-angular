import { User } from './../../../model/user/user';
import { SettingsService } from './../../../services/settings.service';
import { UserService } from '../../../services/user.service';
import { CurrentUser } from '../../../model/currentUser/currentUser';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = new User('','','','');
  settings : SettingsService;
  message : string;

  constructor(
    private userService: UserService,
    private router: Router) { 
    this.settings = SettingsService.getInstance();
  }

  ngOnInit() {
  }

  login(){
    this.message = '';
    this.userService.login(this.user).subscribe((userAuthentication:CurrentUser) => {
        this.settings.token = userAuthentication.token;
        this.settings.user = userAuthentication.user;
        this.settings.user.profile = this.settings.user.profile.substring(5);
        this.settings.showTemplate.emit(true);
        this.router.navigate(['/']);
    } , err => {
      this.settings.token = null;
      this.settings.user = null;
      this.settings.showTemplate.emit(false);
      this.message = 'Erro ';
    });
  }

  cancelLogin(){
    this.message = '';
    this.user = new User('', '','','');
    window.location.href = '/login';
    window.location.reload();
  }

  getFormGroupClass(isInvalid: boolean, isDirty:boolean): {} {
    return {
      'form-group': true,
      'has-error' : isInvalid  && isDirty,
      'has-success' : !isInvalid && isDirty
    };
  }
}
