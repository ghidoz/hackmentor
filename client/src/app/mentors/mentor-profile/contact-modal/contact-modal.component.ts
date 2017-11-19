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
  public currentUserId: string;

  constructor(public activeModal: NgbActiveModal,
              private goalApi: GoalApi,
              private contactRequestApi: ContactRequestApi,
              private auth: LoopBackAuth) {
  }

  ngOnInit() {
    this.currentUserId = this.auth.getCurrentUserData().id;
    const filter = {
      where: {
        apprenticeId: this.currentUserId
      }
    };
    this.goalApi.find(filter).subscribe((goals: Goal[]) => {
      this.goals = goals;
      if (this.goals.length) {
        this.request.goalId = this.goals[0].id;
      }
    });
  }

  public send() {
    const params = Object.assign(this.request, {
      senderId: this.currentUserId,
      recipientId: this.mentor.id,
      status: 'open'
    });
    this.contactRequestApi.create(params).subscribe(() => {
      this.contacted = true;
    });
  }

}
