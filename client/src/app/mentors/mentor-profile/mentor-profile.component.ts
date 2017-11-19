import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MyUser } from '../../shared/sdk/models/MyUser';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ContactModalComponent } from './contact-modal/contact-modal.component';

@Component({
  selector: 'hm-mentor-profile',
  templateUrl: './mentor-profile.component.html',
  styleUrls: ['./mentor-profile.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class MentorProfileComponent implements OnInit {

  public mentor: MyUser;
  public imageId = Math.random();

  constructor(private route: ActivatedRoute,
              private router: Router,
              private modalService: NgbModal) { }

  ngOnInit() {
    this.mentor = this.route.snapshot.data['mentor'];
  }

  public contact() {
    const modalRef: NgbModalRef = this.modalService.open(ContactModalComponent, {windowClass: 'contact'});
    modalRef.componentInstance.mentor = this.mentor;
    modalRef.result.then(() => {
      this.router.navigate(['/requests']);
    }, () => {});
  }

}
