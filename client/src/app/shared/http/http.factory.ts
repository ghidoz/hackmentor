import {XHRBackend, Http, RequestOptions} from '@angular/http';
import {InterceptedHttp} from './http.interceptor';
import {Router} from '@angular/router';
import {LoopBackAuth} from '../sdk/services/core/auth.service';

export function httpFactory(xhrBackend: XHRBackend, requestOptions: RequestOptions, loopBackAuth: LoopBackAuth, router: Router): Http {
  return new InterceptedHttp(xhrBackend, requestOptions, loopBackAuth, router);
}
