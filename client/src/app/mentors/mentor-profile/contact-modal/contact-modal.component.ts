import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { MyUser } from '../../../shared/sdk/models/MyUser';
import { GoalApi } from '../../../shared/sdk/services/custom/Goal';
import { Goal } from '../../../shared/sdk/models/Goal';
import { ContactRequestApi } from '../../../shared/sdk/services/custom/ContactRequest';
import { LoopBackAuth } from '../../../shared/sdk/services/core/auth.service';

@Component({
  selector: 'hm-contact-modal',
  templateUrl: './contact-modal.component.html',
  styleUrls: ['./contact-modal.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ContactModalComponent implements OnInit {

  public mentor: MyUser;
  public request: any = {};
  public goals: Goal[];
  public contacted: boolean;

  constructor(public activeModal: NgbActiveModal,
              private goalApi: GoalApi,
              private contactRequestApi: ContactRequestApi,
              private auth: LoopBackAuth) {
  }

  ngOnInit() {
    const filter = {
      where: {
        apprenticeId: this.mentor.id
      }
    };
    this.goalApi.find(filter).subscribe((goals: Goal[]) => {
      this.goals = goals;
      this.request.goalId = this.goals[0].id;
    });
  }

  public send() {
    const params = Object.assign(this.request, {
      senderId: this.auth.getCurrentUserData().id,
      recipientId: this.mentor.id,
      status: 'open'
    });
    this.contactRequestApi.create(params).subscribe(() => {
      this.contacted = true;
    });
  }

}
