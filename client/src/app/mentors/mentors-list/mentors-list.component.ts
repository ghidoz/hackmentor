import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MentorProfileApi } from '../../shared/sdk/services/custom/MentorProfile';
import { MentorProfile } from '../../shared/sdk/models/MentorProfile';

@Component({
  selector: 'hm-mentors-list',
  templateUrl: './mentors-list.component.html',
  styleUrls: ['./mentors-list.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class MentorsListComponent implements OnInit {

  public mentors: MentorProfile[];

  constructor(private mentorProfileApi: MentorProfileApi) { }

  ngOnInit() {
    this.mentorProfileApi.find().subscribe((mentorProfiles: MentorProfile[]) => {
      this.mentors = mentorProfiles;
    });
  }

}
