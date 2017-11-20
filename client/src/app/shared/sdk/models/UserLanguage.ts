/* tslint:disable */
import {
  MyUser,
  Language
} from '../index';

declare var Object: any;
export interface UserLanguageInterface {
  "userId"?: number;
  "languageId"?: number;
  user?: MyUser;
  language?: Language;
}

export class UserLanguage implements UserLanguageInterface {
  "userId": number;
  "languageId": number;
  user: MyUser;
  language: Language;
  constructor(data?: UserLanguageInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `UserLanguage`.
   */
  public static getModelName() {
    return "UserLanguage";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of UserLanguage for dynamic purposes.
  **/
  public static factory(data: UserLanguageInterface): UserLanguage{
    return new UserLanguage(data);
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
      name: 'UserLanguage',
      plural: 'UserLanguages',
      path: 'UserLanguages',
      idName: 'userId',
      properties: {
        "userId": {
          name: 'userId',
          type: 'number'
        },
        "languageId": {
          name: 'languageId',
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
        language: {
          name: 'language',
          type: 'Language',
          model: 'Language',
          relationType: 'belongsTo',
                  keyFrom: 'languageId',
          keyTo: 'id'
        },
      }
    }
  }
}
