import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { mentorsRoutedComponents, MentorsRoutingModule } from './mentors.routes';
import { MentorItemComponent } from './mentors-list/mentor-item/mentor-item.component';
import { LayoutModule } from '../layout/layout.module';
import { MentorResolverService } from './mentor-profile/mentor-resolver.service';

@NgModule({
  imports: [
    CommonModule,
    MentorsRoutingModule,
    LayoutModule
  ],
  declarations: [
    mentorsRoutedComponents,
    MentorItemComponent
  ],
  providers: [
    MentorResolverService
  ]
})
export class MentorsModule { }
