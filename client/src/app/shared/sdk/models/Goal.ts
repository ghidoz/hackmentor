/* tslint:disable */
import {
  MyUser,
  GoalSkill,
  Skill,
  ContactRequest
} from '../index';

declare var Object: any;
export interface GoalInterface {
  "hoursPerWeek": number;
  "weeklyBudget": number;
  "headline": string;
  "description": string;
  "status": string;
  "id"?: number;
  "apprenticeId"?: number;
  "mentorId"?: number;
  apprentice?: MyUser;
  mentor?: MyUser;
  goalSkills?: GoalSkill[];
  skills?: Skill[];
  contactRequest?: ContactRequest[];
}

export class Goal implements GoalInterface {
  "hoursPerWeek": number;
  "weeklyBudget": number;
  "headline": string;
  "description": string;
  "status": string;
  "id": number;
  "apprenticeId": number;
  "mentorId": number;
  apprentice: MyUser;
  mentor: MyUser;
  goalSkills: GoalSkill[];
  skills: Skill[];
  contactRequest: ContactRequest[];
  constructor(data?: GoalInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Goal`.
   */
  public static getModelName() {
    return "Goal";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Goal for dynamic purposes.
  **/
  public static factory(data: GoalInterface): Goal{
    return new Goal(data);
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
      name: 'Goal',
      plural: 'Goals',
      path: 'Goals',
      idName: 'id',
      properties: {
        "hoursPerWeek": {
          name: 'hoursPerWeek',
          type: 'number'
        },
        "weeklyBudget": {
          name: 'weeklyBudget',
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
        "status": {
          name: 'status',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
        "apprenticeId": {
          name: 'apprenticeId',
          type: 'number'
        },
        "mentorId": {
          name: 'mentorId',
          type: 'number'
        },
      },
      relations: {
        apprentice: {
          name: 'apprentice',
          type: 'MyUser',
          model: 'MyUser',
          relationType: 'belongsTo',
                  keyFrom: 'apprenticeId',
          keyTo: 'id'
        },
        mentor: {
          name: 'mentor',
          type: 'MyUser',
          model: 'MyUser',
          relationType: 'belongsTo',
                  keyFrom: 'mentorId',
          keyTo: 'id'
        },
        goalSkills: {
          name: 'goalSkills',
          type: 'GoalSkill[]',
          model: 'GoalSkill',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'goalId'
        },
        skills: {
          name: 'skills',
          type: 'Skill[]',
          model: 'Skill',
          relationType: 'hasMany',
          modelThrough: 'GoalSkill',
          keyThrough: 'skillId',
          keyFrom: 'id',
          keyTo: 'goalId'
        },
        contactRequest: {
          name: 'contactRequest',
          type: 'ContactRequest[]',
          model: 'ContactRequest',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'goalId'
        },
      }
    }
  }
}
