import { NgModule } from '@angular/core';
import { HomeRoutingModule, routedComponents } from './home.routes';
import { CommonModule } from '@angular/common';
import { AlreadyLoggedGuard } from './alreadyLogged.guard';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  exports: [],
  declarations: [
    routedComponents
  ],
  providers: [
    AlreadyLoggedGuard
  ]
})
export class HomeModule {
}
