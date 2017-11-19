import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { goalsRoutedComponents, GoalsRoutingModule } from './goals.routes';
import { GoalItemComponent } from './goal-item/goal-item.component';

@NgModule({
  imports: [
    CommonModule,
    GoalsRoutingModule
  ],
  declarations: [
    goalsRoutedComponents,
    GoalItemComponent
  ]
})
export class GoalsModule { }
