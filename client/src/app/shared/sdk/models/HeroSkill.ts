/* tslint:disable */
import {
  HeroCategory,
  Skill
} from '../index';

declare var Object: any;
export interface HeroSkillInterface {
  "heroCategoryId"?: number;
  "skillId"?: number;
  heroCategory?: HeroCategory;
  skill?: Skill;
}

export class HeroSkill implements HeroSkillInterface {
  "heroCategoryId": number;
  "skillId": number;
  heroCategory: HeroCategory;
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
      idName: 'heroCategoryId',
      properties: {
        "heroCategoryId": {
          name: 'heroCategoryId',
          type: 'number'
        },
        "skillId": {
          name: 'skillId',
          type: 'number'
        },
      },
      relations: {
        heroCategory: {
          name: 'heroCategory',
          type: 'HeroCategory',
          model: 'HeroCategory',
          relationType: 'belongsTo',
                  keyFrom: 'heroCategoryId',
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
