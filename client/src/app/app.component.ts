import { Component } from '@angular/core';
import { environment } from '../environments/environment';
import { LoopBackConfig } from './shared/sdk/lb.config';
import { FacebookService } from 'ngx-facebook';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';
import { configIcons } from './icons.config';

@Component({
  selector: 'hm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private fb: FacebookService,
              private sanitizer: DomSanitizer,
              private matIconRegistry: MatIconRegistry) {
    // Configure loopback
    LoopBackConfig.setBaseURL(environment.loopback.baseUrl);
    fb.init(environment.facebook);
    configIcons(this.matIconRegistry, this.sanitizer);
  }
}
