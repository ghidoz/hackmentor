import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { requestsRoutedComponents, RequestsRoutingModule } from './requests.routes';
import { RequestItemComponent } from './request-item/request-item.component';
import { LayoutModule } from '../layout/layout.module';
import { StartMentorshipDialogComponent } from './request-item/start-mentorship-dialog/start-mentorship-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    RequestsRoutingModule,
    LayoutModule
  ],
  declarations: [
    requestsRoutedComponents,
    RequestItemComponent,
    StartMentorshipDialogComponent
  ],
  entryComponents: [
    StartMentorshipDialogComponent
  ]
})
export class RequestsModule { }
