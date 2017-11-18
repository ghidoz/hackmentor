/* tslint:disable */
import { Injectable } from '@angular/core';
import { Role } from '../../models/Role';
import { MyUser } from '../../models/MyUser';
import { Goal } from '../../models/Goal';
import { GoalSkill } from '../../models/GoalSkill';
import { HeroCategory } from '../../models/HeroCategory';
import { HeroSkill } from '../../models/HeroSkill';
import { Language } from '../../models/Language';
import { MentorProfile } from '../../models/MentorProfile';
import { MentorSkill } from '../../models/MentorSkill';
import { Skill } from '../../models/Skill';
import { UserLanguage } from '../../models/UserLanguage';
import { ContactRequest } from '../../models/ContactRequest';

export interface Models { [name: string]: any }

@Injectable()
export class SDKModels {

  private models: Models = {
    Role: Role,
    MyUser: MyUser,
    Goal: Goal,
    GoalSkill: GoalSkill,
    HeroCategory: HeroCategory,
    HeroSkill: HeroSkill,
    Language: Language,
    MentorProfile: MentorProfile,
    MentorSkill: MentorSkill,
    Skill: Skill,
    UserLanguage: UserLanguage,
    ContactRequest: ContactRequest,
    
  };

  public get(modelName: string): any {
    return this.models[modelName];
  }

  public getAll(): Models {
    return this.models;
  }

  public getModelNames(): string[] {
    return Object.keys(this.models);
  }
}
