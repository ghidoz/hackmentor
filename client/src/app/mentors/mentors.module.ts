import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { mentorsRoutedComponents, MentorsRoutingModule } from './mentors.routes';
import { MentorItemComponent } from './mentors-list/mentor-item/mentor-item.component';
import { LayoutModule } from '../layout/layout.module';
import { MentorResolverService } from './mentor-profile/mentor-resolver.service';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { ContactModalComponent } from './mentor-profile/contact-modal/contact-modal.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MentorsRoutingModule,
    LayoutModule,
    NgbModalModule,
    FormsModule
  ],
  declarations: [
    mentorsRoutedComponents,
    MentorItemComponent,
    ContactModalComponent
  ],
  providers: [
    MentorResolverService
  ],
  entryComponents: [
    ContactModalComponent
  ]
})
export class MentorsModule { }
