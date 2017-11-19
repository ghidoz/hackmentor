import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MyUser } from '../../../shared/sdk/models/MyUser';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'hm-start-mentorship-dialog',
  templateUrl: './start-mentorship-dialog.component.html',
  styleUrls: ['./start-mentorship-dialog.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class StartMentorshipDialogComponent implements OnInit {

  public mentor: MyUser;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

}
