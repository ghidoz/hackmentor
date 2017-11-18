import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'hm-mentors',
  template: `
    <router-outlet></router-outlet>
  `,
  encapsulation: ViewEncapsulation.Emulated
})
export class MentorsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
