import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { mentorsRoutedComponents, MentorsRoutingModule } from './mentors.routes';
import { MentorItemComponent } from './mentors-list/mentor-item/mentor-item.component';
import { LayoutModule } from '../layout/layout.module';

@NgModule({
  imports: [
    CommonModule,
    MentorsRoutingModule,
    LayoutModule
  ],
  declarations: [
    mentorsRoutedComponents,
    MentorItemComponent
  ]
})
export class MentorsModule { }
