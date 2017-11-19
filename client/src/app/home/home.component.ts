import { Component, OnInit } from '@angular/core';
import { FacebookService, LoginResponse } from 'ngx-facebook';
import { MyUserApi } from '../shared/sdk/services/custom/MyUser';
import { SDKToken } from '../shared/sdk/models/BaseModels';
import { LoopBackAuth } from '../shared/sdk/services/core/auth.service';
import { MyUser } from '../shared/sdk/models/MyUser';
import { Router } from '@angular/router';

@Component({
  selector: 'hm-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public user: MyUser;

  constructor(private fb: FacebookService,
              private myUser: MyUserApi,
              private auth: LoopBackAuth,
              private router: Router) {
  }

  ngOnInit() {
    this.user = this.auth.getCurrentUserData();
  }

  fbLogin(): void {
    this.fb.login({
      scope: 'email,user_location'
    })
      .then((response: LoginResponse) => {
        this.myUser.fbAuthentication(response.authResponse.accessToken).subscribe((accessToken: SDKToken) => {
          accessToken.rememberMe = true;
          this.auth.setToken(accessToken);
          this.user = accessToken.user;
          this.router.navigate(['goals/new']);
        });
      })
      .catch((error: any) => console.error(error));
  }

}
