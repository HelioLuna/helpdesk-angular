import { Component } from '@angular/core';
import { SettingsService } from './services/settings.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showTemplate: Boolean = false;
  public settings:  SettingsService;

  constructor(){
    this.settings = SettingsService.getInstance();
  }

  ngOnInit(){
    this.settings.showTemplate.subscribe(
      show => this.showTemplate = show
    );
  }

  showContentWrapper(){
    return {
      "content-wrapper": this.settings.isLoggedIn()
    }
  }
}
