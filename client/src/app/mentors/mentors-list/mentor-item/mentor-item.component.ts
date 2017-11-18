import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { MentorProfile } from '../../../shared/sdk/models/MentorProfile';

@Component({
  selector: 'hm-mentor-item',
  templateUrl: './mentor-item.component.html',
  styleUrls: ['./mentor-item.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class MentorItemComponent implements OnInit {

  @Input() mentor: MentorProfile;

  constructor() { }

  ngOnInit() {
  }

}
