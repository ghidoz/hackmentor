import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MyUser } from '../../shared/sdk/models/MyUser';

@Component({
  selector: 'hm-mentor-profile',
  templateUrl: './mentor-profile.component.html',
  styleUrls: ['./mentor-profile.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class MentorProfileComponent implements OnInit {

  public mentor: MyUser;
  public imageId = Math.random();

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.mentor = this.route.snapshot.data['mentor'];
    console.log(this.mentor);
  }

}
