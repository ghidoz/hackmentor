import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material';
import { TopBarComponent } from './top-bar/top-bar.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule
  ],
  exports: [
    MenuComponent,
    TopBarComponent
  ],
  declarations: [
    MenuComponent,
    TopBarComponent
  ]
})
export class LayoutModule { }
