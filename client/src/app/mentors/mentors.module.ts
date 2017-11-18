import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { mentorsRoutedComponents, MentorsRoutingModule } from './mentors.routes';
import { MentorItemComponent } from './mentors-list/mentor-item/mentor-item.component';

@NgModule({
  imports: [
    CommonModule,
    MentorsRoutingModule
  ],
  declarations: [
    mentorsRoutedComponents,
    MentorItemComponent
  ]
})
export class MentorsModule { }
