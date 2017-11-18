/* tslint:disable */
import {
  Skill
} from '../index';

declare var Object: any;
export interface HeroCategoryInterface {
  "name": string;
  "id"?: number;
  skills?: Skill[];
}

export class HeroCategory implements HeroCategoryInterface {
  "name": string;
  "id": number;
  skills: Skill[];
  constructor(data?: HeroCategoryInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `HeroCategory`.
   */
  public static getModelName() {
    return "HeroCategory";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of HeroCategory for dynamic purposes.
  **/
  public static factory(data: HeroCategoryInterface): HeroCategory{
    return new HeroCategory(data);
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
      name: 'HeroCategory',
      plural: 'HeroCategories',
      path: 'HeroCategories',
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
        skills: {
          name: 'skills',
          type: 'Skill[]',
          model: 'Skill',
          relationType: 'hasMany',
          modelThrough: 'HeroSkill',
          keyThrough: 'skillId',
          keyFrom: 'id',
          keyTo: 'skillId'
        },
      }
    }
  }
}
