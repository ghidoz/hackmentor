/* tslint:disable */
import {
  HeroCategory,
  Skill
} from '../index';

declare var Object: any;
export interface HeroSkillInterface {
  "id"?: number;
  "heroId"?: number;
  "skillId"?: number;
  hero?: HeroCategory;
  skill?: Skill;
}

export class HeroSkill implements HeroSkillInterface {
  "id": number;
  "heroId": number;
  "skillId": number;
  hero: HeroCategory;
  skill: Skill;
  constructor(data?: HeroSkillInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `HeroSkill`.
   */
  public static getModelName() {
    return "HeroSkill";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of HeroSkill for dynamic purposes.
  **/
  public static factory(data: HeroSkillInterface): HeroSkill{
    return new HeroSkill(data);
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
      name: 'HeroSkill',
      plural: 'HeroSkills',
      path: 'HeroSkills',
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'number'
        },
        "heroId": {
          name: 'heroId',
          type: 'number'
        },
        "skillId": {
          name: 'skillId',
          type: 'number'
        },
      },
      relations: {
        hero: {
          name: 'hero',
          type: 'HeroCategory',
          model: 'HeroCategory',
          relationType: 'belongsTo',
                  keyFrom: 'heroId',
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
