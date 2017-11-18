import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { requestsRoutedComponents, RequestsRoutingModule } from './requests.routes';

@NgModule({
  imports: [
    CommonModule,
    RequestsRoutingModule
  ],
  declarations: [
    requestsRoutedComponents
  ]
})
export class RequestsModule { }
