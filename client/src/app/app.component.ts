import { Component } from '@angular/core';
import {environment} from '../environments/environment';
import {LoopBackConfig} from './shared/sdk/lb.config';

@Component({
  selector: 'hm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor() {
    // Configure loopback
    LoopBackConfig.setBaseURL(environment.loopback.baseUrl);
  }
}
