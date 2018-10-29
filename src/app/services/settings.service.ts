import { Injectable, EventEmitter } from '@angular/core';
import { User } from '../model/user/user';

@Injectable()
export class SettingsService {

  public static instance: SettingsService = null;
  user : User;
  token: string;
  showTemplate = new EventEmitter<boolean>();

  constructor() { 
    return SettingsService.instance = SettingsService.instance || this;
  }

  public static getInstance(){
    if(this.instance == null){
      this.instance = new SettingsService();
    }
    return this.instance;
  }

  isLoggedIn():boolean {
    if(this.user == null){
      return false;
    }
    return this.user.email != '';
  }

}