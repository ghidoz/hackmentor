import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { mentorsRoutedComponents, MentorsRoutingModule } from './mentors.routes';

@NgModule({
  imports: [
    CommonModule,
    MentorsRoutingModule
  ],
  declarations: [
    mentorsRoutedComponents
  ]
})
export class MentorsModule { }
