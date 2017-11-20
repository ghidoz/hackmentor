/* tslint:disable */
import {
  Goal,
  Skill
} from '../index';

declare var Object: any;
export interface GoalSkillInterface {
  "goalId"?: number;
  "skillId"?: number;
  "level": string;
  goal?: Goal;
  skill?: Skill;
}

export class GoalSkill implements GoalSkillInterface {
  "goalId": number;
  "skillId": number;
  "level": string;
  goal: Goal;
  skill: Skill;
  constructor(data?: GoalSkillInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `GoalSkill`.
   */
  public static getModelName() {
    return "GoalSkill";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of GoalSkill for dynamic purposes.
  **/
  public static factory(data: GoalSkillInterface): GoalSkill{
    return new GoalSkill(data);
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
      name: 'GoalSkill',
      plural: 'GoalSkills',
      path: 'GoalSkills',
      idName: 'goalId',
      properties: {
        "goalId": {
          name: 'goalId',
          type: 'number'
        },
        "skillId": {
          name: 'skillId',
          type: 'number'
        },
        "level": {
          name: 'level',
          type: 'string',
          default: '1'
        },
      },
      relations: {
        goal: {
          name: 'goal',
          type: 'Goal',
          model: 'Goal',
          relationType: 'belongsTo',
                  keyFrom: 'goalId',
          keyTo: 'id'
        },
        skill: {
          name: 'skill',
          type: 'Skill',
          model: 'Skill',
          relationType: 'belongsTo',
                  keyFrom: 'skillId',
          keyTo: 'id'
        },
      }
    }
  }
}
