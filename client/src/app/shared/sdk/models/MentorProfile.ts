/* tslint:disable */
import {
  MyUser,
  MentorSkill
} from '../index';

declare var Object: any;
export interface MentorProfileInterface {
  "hoursPerWeek": number;
  "pricePerHour": number;
  "levelOfExperience": number;
  "headline": string;
  "description": string;
  "id"?: number;
  "userId"?: number;
  user?: MyUser;
  skills?: MentorSkill[];
}

export class MentorProfile implements MentorProfileInterface {
  "hoursPerWeek": number;
  "pricePerHour": number;
  "levelOfExperience": number;
  "headline": string;
  "description": string;
  "id": number;
  "userId": number;
  user: MyUser;
  skills: MentorSkill[];
  constructor(data?: MentorProfileInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `MentorProfile`.
   */
  public static getModelName() {
    return "MentorProfile";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of MentorProfile for dynamic purposes.
  **/
  public static factory(data: MentorProfileInterface): MentorProfile{
    return new MentorProfile(data);
  }
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'MentorProfile',
      plural: 'MentorProfiles',
      path: 'MentorProfiles',
      idName: 'id',
      properties: {
        "hoursPerWeek": {
          name: 'hoursPerWeek',
          type: 'number'
        },
        "pricePerHour": {
          name: 'pricePerHour',
          type: 'number'
        },
        "levelOfExperience": {
          name: 'levelOfExperience',
          type: 'number'
        },
        "headline": {
          name: 'headline',
          type: 'string'
        },
        "description": {
          name: 'description',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
        "userId": {
          name: 'userId',
          type: 'number'
        },
      },
      relations: {
        user: {
          name: 'user',
          type: 'MyUser',
          model: 'MyUser',
          relationType: 'belongsTo',
                  keyFrom: 'userId',
          keyTo: 'id'
        },
        skills: {
          name: 'skills',
          type: 'MentorSkill[]',
          model: 'MentorSkill',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'mentorProfileId'
        },
      }
    }
  }
}
