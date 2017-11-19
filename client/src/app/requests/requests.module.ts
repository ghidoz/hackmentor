import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { requestsRoutedComponents, RequestsRoutingModule } from './requests.routes';
import { RequestItemComponent } from './request-item/request-item.component';
import { LayoutModule } from '../layout/layout.module';

@NgModule({
  imports: [
    CommonModule,
    RequestsRoutingModule,
    LayoutModule
  ],
  declarations: [
    requestsRoutedComponents,
    RequestItemComponent
  ]
})
export class RequestsModule { }
