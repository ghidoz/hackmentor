import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GoalsComponent } from './goals.component';
import { NewGoalComponent } from './new-goal/new-goal.component';

const routes: Routes = [
  {path: 'goals', component: GoalsComponent},
  {path: 'goals/new', component: NewGoalComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GoalsRoutingModule {
}

export const goalsRoutedComponents = [GoalsComponent, NewGoalComponent];
