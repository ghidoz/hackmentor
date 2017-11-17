import { NgModule } from '@angular/core';
import { HomeRoutingModule, routedComponents } from './home.routes';

@NgModule({
  imports: [
    HomeRoutingModule
  ],
  exports: [],
  declarations: [
    routedComponents
  ]
})
export class HomeModule {
}
