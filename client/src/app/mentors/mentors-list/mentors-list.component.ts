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

    const filter = {
      include: 'mentorProfile',
      where: {
        mentorProfileId: {
          gt: 0
        }
      }
    };

    this.userApi.find(filter).subscribe((mentorProfiles: MyUser[]) => {
      this.mentors = mentorProfiles;
    });
  }

}
