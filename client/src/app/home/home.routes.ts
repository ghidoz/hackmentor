import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { AlreadyLoggedGuard } from './alreadyLogged.guard';

const routes: Routes = [
  {path: 'home', canActivate: [AlreadyLoggedGuard],component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {
}

export const routedComponents = [HomeComponent];
