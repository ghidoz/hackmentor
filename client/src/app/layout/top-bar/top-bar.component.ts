import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { LoopBackAuth } from '../../shared/sdk/services/core/auth.service';
import { MyUser } from '../../shared/sdk/models/MyUser';

@Component({
  selector: 'hm-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class TopBarComponent implements OnInit {

  public user: MyUser;

  constructor(private auth: LoopBackAuth) { }

  ngOnInit() {
    this.user = this.auth.getCurrentUserData();
  }

}
