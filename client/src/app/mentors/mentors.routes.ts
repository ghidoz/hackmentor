import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MentorsComponent } from './mentors.component';
import { MentorsListComponent } from './mentors-list/mentors-list.component';

const routes: Routes = [
  {
    path: 'mentors',
    component: MentorsComponent,
    children: [
      {
        path: 'list',
        component: MentorsListComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MentorsRoutingModule {
}

export const mentorsRoutedComponents = [
  MentorsComponent,
  MentorsListComponent
];
