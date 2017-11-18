import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { MyUser } from '../../shared/sdk/models/MyUser';
import { MyUserApi } from '../../shared/sdk/services/custom/MyUser';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MentorResolverService implements Resolve<MyUser> {

  constructor(private myUser: MyUserApi) { }

  resolve(route: ActivatedRouteSnapshot): Observable<MyUser> {
    const filter = {
      include: 'mentorProfile',
      where: {
        mentorProfileId: {
          gt: 0
        }
      }
    };
    return this.myUser.findById(route.paramMap.get('id'), filter);
  }

}
