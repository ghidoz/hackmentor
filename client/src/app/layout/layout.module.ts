import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule
  ],
  exports: [
    MenuComponent
  ],
  declarations: [
    MenuComponent
  ]
})
export class LayoutModule { }
