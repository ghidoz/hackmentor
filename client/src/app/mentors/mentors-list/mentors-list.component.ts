import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MyUserApi } from '../../shared/sdk/services/custom/MyUser';
import { MyUser } from '../../shared/sdk/models/MyUser';

@Component({
  selector: 'hm-mentors-list',
  templateUrl: './mentors-list.component.html',
  styleUrls: ['./mentors-list.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class MentorsListComponent implements OnInit {

  public mentors: MyUser[];

  constructor(private userApi: MyUserApi) { }

  ngOnInit() {

    this.userApi.filterMentors().subscribe((mentorProfiles: MyUser[]) => {
      this.mentors = mentorProfiles;
    });
  }

}
