/* tslint:disable */
import {
  Goal,
  MyUser
} from '../index';

declare var Object: any;
export interface ContactRequestInterface {
  "message": string;
  "status": string;
  "id"?: number;
  "goalId"?: number;
  "senderId"?: number;
  "recipientId"?: number;
  goal?: Goal;
  sender?: MyUser;
  recipient?: MyUser;
}

export class ContactRequest implements ContactRequestInterface {
  "message": string;
  "status": string;
  "id": number;
  "goalId": number;
  "senderId": number;
  "recipientId": number;
  goal: Goal;
  sender: MyUser;
  recipient: MyUser;
  constructor(data?: ContactRequestInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `ContactRequest`.
   */
  public static getModelName() {
    return "ContactRequest";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of ContactRequest for dynamic purposes.
  **/
  public static factory(data: ContactRequestInterface): ContactRequest{
    return new ContactRequest(data);
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
      name: 'ContactRequest',
      plural: 'ContactRequests',
      path: 'ContactRequests',
      idName: 'id',
      properties: {
        "message": {
          name: 'message',
          type: 'string'
        },
        "status": {
          name: 'status',
          type: 'string',
          default: 'open'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
        "goalId": {
          name: 'goalId',
          type: 'number'
        },
        "senderId": {
          name: 'senderId',
          type: 'number'
        },
        "recipientId": {
          name: 'recipientId',
          type: 'number'
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
        sender: {
          name: 'sender',
          type: 'MyUser',
          model: 'MyUser',
          relationType: 'belongsTo',
                  keyFrom: 'senderId',
          keyTo: 'id'
        },
        recipient: {
          name: 'recipient',
          type: 'MyUser',
          model: 'MyUser',
          relationType: 'belongsTo',
                  keyFrom: 'recipientId',
          keyTo: 'id'
        },
      }
    }
  }
}
