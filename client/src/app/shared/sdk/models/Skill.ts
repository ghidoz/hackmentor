/* tslint:disable */
import {
  HeroSkill,
  HeroCategory
} from '../index';

declare var Object: any;
export interface SkillInterface {
  "name": string;
  "id"?: number;
  heroSkills?: HeroSkill[];
  heroCategories?: HeroCategory[];
}

export class Skill implements SkillInterface {
  "name": string;
  "id": number;
  heroSkills: HeroSkill[];
  heroCategories: HeroCategory[];
  constructor(data?: SkillInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Skill`.
   */
  public static getModelName() {
    return "Skill";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Skill for dynamic purposes.
  **/
  public static factory(data: SkillInterface): Skill{
    return new Skill(data);
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
      name: 'Skill',
      plural: 'Skills',
      path: 'Skills',
      idName: 'id',
      properties: {
        "name": {
          name: 'name',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
      },
      relations: {
        heroSkills: {
          name: 'heroSkills',
          type: 'HeroSkill[]',
          model: 'HeroSkill',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'skillId'
        },
        heroCategories: {
          name: 'heroCategories',
          type: 'HeroCategory[]',
          model: 'HeroCategory',
          relationType: 'hasMany',
          modelThrough: 'HeroSkill',
          keyThrough: 'heroCategoryId',
          keyFrom: 'id',
          keyTo: 'skillId'
        },
      }
    }
  }
}
