import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { ContactRequest } from '../../shared/sdk/models/ContactRequest';
import { MyUser } from '../../shared/sdk/models/MyUser';
import { LoopBackAuth } from '../../shared/sdk/services/core/auth.service';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { StartMentorshipDialogComponent } from './start-mentorship-dialog/start-mentorship-dialog.component';

@Component({
  selector: 'hm-request-item',
  templateUrl: './request-item.component.html',
  styleUrls: ['./request-item.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class RequestItemComponent implements OnInit {

  @Input() request: ContactRequest;
  public user: MyUser;
  public sent: boolean;
  public picture: string;

  constructor(private auth: LoopBackAuth,
              private modalService: NgbModal) { }

  ngOnInit() {
    const currentUserId = this.auth.getCurrentUserData().id;
    this.user = this.request.sender.mentorProfileId ? this.request.sender : this.request.recipient;
    this.sent = this.request.sender.id === currentUserId;
    this.picture = 'https://placeimg.com/60/60/people?' + Math.random()
  }

  public startMentorship() {
    const modalRef: NgbModalRef = this.modalService.open(StartMentorshipDialogComponent, {windowClass: 'contact'});
    modalRef.componentInstance.mentor = this.user;
    modalRef.result.then(() => {

    }, () => {});
  }

}
