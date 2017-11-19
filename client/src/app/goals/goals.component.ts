import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { GoalApi } from '../shared/sdk/services/custom/Goal';
import { Goal } from '../shared/sdk/models/Goal';

@Component({
  selector: 'hm-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class GoalsComponent implements OnInit {

  public goals: Goal[];

  constructor(private goalApi: GoalApi) { }

  ngOnInit() {
    this.goalApi.myGoals().subscribe((goals: Goal[]) => {
      this.goals = goals;
    });
  }

}
