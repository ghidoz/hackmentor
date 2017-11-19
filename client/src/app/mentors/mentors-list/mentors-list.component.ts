import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {MyUserApi} from '../../shared/sdk/services/custom/MyUser';
import {MyUser} from '../../shared/sdk/models/MyUser';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'hm-mentors-list',
  templateUrl: './mentors-list.component.html',
  styleUrls: ['./mentors-list.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class MentorsListComponent implements OnInit {

  public mentors: MyUser[];

  private offset: number;
  private limit: number;

  constructor(private userApi: MyUserApi, private router: Router) {
  }

  ngOnInit() {
    this.mentors = [];
    this.offset = 0;
    this.limit = 20;
    this.onScroll();
  }

  onScroll() {

    const filter = {
      offset: this.offset + this.limit,
      limit: this.limit
    };

    this.offset += this.limit;

    console.log('Filter', filter);

    this.userApi.filterMentors(filter)
      .subscribe((mentors: MyUser[]) => {
        this.mentors = this.mentors.concat(mentors);
      });

  }
}
