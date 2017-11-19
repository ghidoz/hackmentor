import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoopBackAuth } from '../shared/sdk/services/core/auth.service';

@Injectable()
export class AlreadyLoggedGuard implements CanActivate {

  constructor(private auth: LoopBackAuth,
              private router: Router) {
  }

  public canActivate() {
    if (this.auth.getCurrentUserData()) {
      this.router.navigate(['/goals']);
      return false;
    }
    return true;
  }
}

