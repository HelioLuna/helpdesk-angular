import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  settings : SettingsService;
  
  constructor(){
    this.settings = SettingsService.getInstance();
  }

  ngOnInit() {
  }

}
