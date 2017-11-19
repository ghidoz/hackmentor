import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { goalsRoutedComponents, GoalsRoutingModule } from './goals.routes';
import { GoalItemComponent } from './goal-item/goal-item.component';
import { LayoutModule } from '../layout/layout.module';
import { MatIconModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    GoalsRoutingModule,
    LayoutModule,
    MatIconModule
  ],
  declarations: [
    goalsRoutedComponents,
    GoalItemComponent
  ]
})
export class GoalsModule { }
