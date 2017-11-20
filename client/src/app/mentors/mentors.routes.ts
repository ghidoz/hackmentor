import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MentorsComponent } from './mentors.component';
import { MentorsListComponent } from './mentors-list/mentors-list.component';
import { MentorProfileComponent } from './mentor-profile/mentor-profile.component';
import { MentorResolverService } from './mentor-profile/mentor-resolver.service';

const routes: Routes = [
  {
    path: 'mentors',
    component: MentorsComponent,
    children: [
      {
        path: 'list',
        component: MentorsListComponent
      },
      {
        path: ':id',
        component: MentorProfileComponent,
        resolve: {
          mentor: MentorResolverService
        }
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
  MentorsListComponent,
  MentorProfileComponent
];
