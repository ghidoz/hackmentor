import { NgModule } from '@angular/core';
import { HomeRoutingModule, routedComponents } from './home.routes';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  exports: [],
  declarations: [
    routedComponents
  ]
})
export class HomeModule {
}
