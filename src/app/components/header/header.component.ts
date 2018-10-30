import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../services/settings.service';
import { Router } from '@angular/router';
import { User } from '../../model/user/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public settings: SettingsService;

  constructor(private userService: UserService,
              private router: Router){
      this.settings = SettingsService.getInstance();
      this.settings.user = new User('','','','');
  }

  ngOnInit(){
  }

  signOut() : void {
    this.settings.token = null;
    this.settings.user = null;
    window.location.href = '/login';
    window.location.reload();
  }

}
