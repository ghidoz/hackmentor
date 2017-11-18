import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { MyUser } from '../../../shared/sdk/models/MyUser';

@Component({
  selector: 'hm-mentor-item',
  templateUrl: './mentor-item.component.html',
  styleUrls: ['./mentor-item.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class MentorItemComponent implements OnInit {

  @Input() mentor: MyUser;
  public imageId: number;

  constructor() {

  }

  ngOnInit() {
    this.imageId = Math.random();
  }

}
