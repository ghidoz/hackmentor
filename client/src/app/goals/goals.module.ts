import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { goalsRoutedComponents, GoalsRoutingModule } from './goals.routes';
import { GoalItemComponent } from './goal-item/goal-item.component';
import { LayoutModule } from '../layout/layout.module';
import { MatIconModule } from '@angular/material';
import { NgbButtonsModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NgbButtonLabel } from '@ng-bootstrap/ng-bootstrap/buttons/label';

@NgModule({
  imports: [
    CommonModule,
    GoalsRoutingModule,
    LayoutModule,
    MatIconModule,
    NgbButtonsModule,
    FormsModule
  ],
  declarations: [
    goalsRoutedComponents,
    GoalItemComponent
  ],
  providers: [NgbButtonLabel]
})
export class GoalsModule { }
