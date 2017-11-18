/* tslint:disable */
import {
  Role,
  MentorProfile
} from '../index';

declare var Object: any;
export interface MyUserInterface {
  "firstName"?: string;
  "familyName"?: string;
  "profilePic"?: string;
  "fbId": number;
  "location"?: string;
  "mentorProfileId"?: number;
  "realm"?: string;
  "username"?: string;
  "email": string;
  "emailVerified"?: boolean;
  "id"?: number;
  "password"?: string;
  accessTokens?: any[];
  roles?: Role[];
  mentorProfile?: MentorProfile;
}

export class MyUser implements MyUserInterface {
  "firstName": string;
  "familyName": string;
  "profilePic": string;
  "fbId": number;
  "location": string;
  "mentorProfileId": number;
  "realm": string;
  "username": string;
  "email": string;
  "emailVerified": boolean;
  "id": number;
  "password": string;
  accessTokens: any[];
  roles: Role[];
  mentorProfile: MentorProfile;
  constructor(data?: MyUserInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `MyUser`.
   */
  public static getModelName() {
    return "MyUser";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of MyUser for dynamic purposes.
  **/
  public static factory(data: MyUserInterface): MyUser{
    return new MyUser(data);
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
      name: 'MyUser',
      plural: 'MyUsers',
      path: 'MyUsers',
      idName: 'id',
      properties: {
        "firstName": {
          name: 'firstName',
          type: 'string'
        },
        "familyName": {
          name: 'familyName',
          type: 'string'
        },
        "profilePic": {
          name: 'profilePic',
          type: 'string'
        },
        "fbId": {
          name: 'fbId',
          type: 'number'
        },
        "location": {
          name: 'location',
          type: 'string'
        },
        "mentorProfileId": {
          name: 'mentorProfileId',
          type: 'number'
        },
        "realm": {
          name: 'realm',
          type: 'string'
        },
        "username": {
          name: 'username',
          type: 'string'
        },
        "email": {
          name: 'email',
          type: 'string'
        },
        "emailVerified": {
          name: 'emailVerified',
          type: 'boolean'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
        "password": {
          name: 'password',
          type: 'string'
        },
      },
      relations: {
        accessTokens: {
          name: 'accessTokens',
          type: 'any[]',
          model: '',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'userId'
        },
        roles: {
          name: 'roles',
          type: 'Role[]',
          model: 'Role',
          relationType: 'hasMany',
          modelThrough: 'RoleMapping',
          keyThrough: 'roleId',
          keyFrom: 'id',
          keyTo: 'principalId'
        },
        mentorProfile: {
          name: 'mentorProfile',
          type: 'MentorProfile',
          model: 'MentorProfile',
          relationType: 'hasOne',
                  keyFrom: 'id',
          keyTo: 'userId'
        },
      }
    }
  }
}
