import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {MyUser} from '../../../shared/sdk/models/MyUser';
import {GoalApi} from '../../../shared/sdk/services/custom/Goal';
import {Goal} from '../../../shared/sdk/models/Goal';

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
              private goalApi: GoalApi) {
  }

  ngOnInit() {

    this.goalApi.myGoals().subscribe((goals: Goal[]) => {
      this.goals = goals;
      if (this.goals.length) {
        this.request.goalId = this.goals[0].id;
      }
    });

  }

  public send() {

    const goalId = this.request.goalId;
    const params = Object.assign({
      recipientId: this.mentor.id
    }, this.request);

    this.goalApi.createContactRequest(goalId, params)
      .subscribe(() => {
        this.contacted = true;
      });
  }

}
