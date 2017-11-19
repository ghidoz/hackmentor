import {NgModule} from '@angular/core';
import {Router, RouterModule} from '@angular/router';
import {SDKBrowserModule} from '../sdk/index';
import {Http, RequestOptions, XHRBackend} from '@angular/http';
import {httpFactory} from './http.factory';
import {LoopBackAuth} from '../sdk/services/core/auth.service';

@NgModule({
  imports: [
    RouterModule,
    SDKBrowserModule
  ],
  providers: [ {
    provide: Http,
    useFactory: httpFactory,
    deps: [XHRBackend, RequestOptions, LoopBackAuth, Router]
  }]
})
export class HttpModule {}
