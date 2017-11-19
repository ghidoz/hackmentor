import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ContactRequestApi } from '../shared/sdk/services/custom/ContactRequest';
import { LoopBackAuth } from '../shared/sdk/services/core/auth.service';
import { ContactRequest } from '../shared/sdk/models/ContactRequest';

@Component({
  selector: 'hm-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class RequestsComponent implements OnInit {

  public requests: ContactRequest[];

  constructor(private contactRequestApi: ContactRequestApi,
              private auth: LoopBackAuth) {
  }

  ngOnInit() {
    const userId = this.auth.getCurrentUserData().id;
    const filter = {
      where: {
        or: [{senderId: userId}, {recipientId: userId}]
      }
    };
    this.contactRequestApi.find(filter).subscribe((requests: ContactRequest[]) => {
      this.requests = requests;
    });
  }

}
