/* tslint:disable */

declare var Object: any;
export interface LanguageInterface {
  "name": string;
  "id"?: number;
}

export class Language implements LanguageInterface {
  "name": string;
  "id": number;
  constructor(data?: LanguageInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Language`.
   */
  public static getModelName() {
    return "Language";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Language for dynamic purposes.
  **/
  public static factory(data: LanguageInterface): Language{
    return new Language(data);
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
      name: 'Language',
      plural: 'Languages',
      path: 'Languages',
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
      }
    }
  }
}
