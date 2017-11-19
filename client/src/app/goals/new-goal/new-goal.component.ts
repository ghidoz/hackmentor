import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HeroCategoryApi } from '../../shared/sdk/services/custom/HeroCategory';
import { HeroCategory } from '../../shared/sdk/models/HeroCategory';
import { GoalApi } from '../../shared/sdk/services/custom/Goal';

@Component({
  selector: 'hm-new-goal',
  templateUrl: './new-goal.component.html',
  styleUrls: ['./new-goal.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class NewGoalComponent implements OnInit {

  public step = 1;
  public goal: any = {
    skills: []
  };
  public heroCategories: HeroCategory[];
  public selectedHeroCategory: HeroCategory;
  public hoursPerWeek: any = [{
    label: '1-3 Hours',
    value: 1
  }, {
    label: '3-6 Hours',
    value: 3
  }, {
    label: '6-10 Hours',
    value: 6
  }, {
    label: '10+ Hours',
    value: 10
  }];
  public weeklyBudgets: any = [{
    label: 'Up to 50€',
    value: 50
  }, {
    label: 'Up to 100€',
    value: 100
  }, {
    label: 'Up to 150€',
    value: 150
  }, {
    label: 'Up to 200€',
    value: 200
  }];

  constructor(private heroCategoryApi: HeroCategoryApi,
              private goalApi: GoalApi) {
  }

  ngOnInit() {
    this.heroCategoryApi.find().subscribe((heroCategories: HeroCategory[]) => {
      this.heroCategories = heroCategories;
    });
  }

  nextStep() {
    this.step++;
  }

  toggleSkill(skill: any) {
    if (skill.selected) {
      this.goal.skills.push(skill.id);
    } else {
      this.goal.skills = this.goal.skills.filter((skillId) => skillId !== skill.id);
    }
  }

  create() {
    this.goalApi.create(this.goal).subscribe(() => {
      
    });
  }

}
