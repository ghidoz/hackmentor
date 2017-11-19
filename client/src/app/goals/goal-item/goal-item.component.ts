import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Goal } from '../../shared/sdk/models/Goal';

@Component({
  selector: 'hm-goal-item',
  templateUrl: './goal-item.component.html',
  styleUrls: ['./goal-item.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class GoalItemComponent implements OnInit {

  @Input() goal: Goal;
  public picture: string;

  constructor() { }

  ngOnInit() {
    this.picture = 'https://placeimg.com/60/60/people?' + Math.random()
  }

}
