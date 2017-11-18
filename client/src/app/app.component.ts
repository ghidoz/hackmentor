import { Component } from '@angular/core';
import { environment } from '../environments/environment';
import { LoopBackConfig } from './shared/sdk/lb.config';
import { FacebookService, InitParams } from 'ngx-facebook';

@Component({
  selector: 'hm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private fb: FacebookService) {
    // Configure loopback
    LoopBackConfig.setBaseURL(environment.loopback.baseUrl);
    fb.init(environment.facebook);
  }
}
