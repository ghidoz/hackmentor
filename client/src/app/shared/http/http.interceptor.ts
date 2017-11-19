import {Injectable} from '@angular/core';
import {ConnectionBackend, Http, Request, RequestOptions, RequestOptionsArgs, Response} from '@angular/http';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import {LoopBackAuth} from '../sdk/services/core/auth.service';

@Injectable()
export class InterceptedHttp extends Http {

  lastUnauthorizedResponseTime: number;

  constructor(
    backend: ConnectionBackend,
    defaultOptions: RequestOptions,
    private loopBackAuth: LoopBackAuth,
    private router: Router) {
    super(backend, defaultOptions);
  }

  request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
    return this.intercept(super.request(url, options));
  }

  get(url: string, options?: RequestOptionsArgs): Observable<Response> {
    return this.intercept(super.get(url, options));
  }

  post(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
    return this.intercept(super.post(url, body, options));
  }

  put(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
    return this.intercept(super.put(url, body, options));
  }

  delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
    return this.intercept(super.delete(url, options));
  }

  patch(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
    return this.intercept(super.patch(url, body, options));
  }

  head(url: string, options?: RequestOptionsArgs): Observable<Response> {
    return this.intercept(super.head(url, options));
  }

  options(url: string, options?: RequestOptionsArgs): Observable<Response> {
    return this.intercept(super.options(url, options));
  }

  private intercept(response: Observable<Response>): Observable<Response> {

    return response.do(
      _ => {},
      error => {

        if (error.status === 401) {
          // Unauthorized
          const now = new Date().getTime();
          // debounce the error logic
          if (!this.lastUnauthorizedResponseTime || (now - this.lastUnauthorizedResponseTime) > 5000) {
            this.loopBackAuth.clear();
            this.router.navigateByUrl('/home');
            this.lastUnauthorizedResponseTime = now;
          }

        }

      }
    );
  }
}
