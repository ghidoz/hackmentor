/* tslint:disable */
import {
  MentorProfile,
  Skill
} from '../index';

declare var Object: any;
export interface MentorSkillInterface {
  "mentorProfileId"?: number;
  "skillId"?: number;
  mentorProfile?: MentorProfile;
  skill?: Skill;
}

export class MentorSkill implements MentorSkillInterface {
  "mentorProfileId": number;
  "skillId": number;
  mentorProfile: MentorProfile;
  skill: Skill;
  constructor(data?: MentorSkillInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `MentorSkill`.
   */
  public static getModelName() {
    return "MentorSkill";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of MentorSkill for dynamic purposes.
  **/
  public static factory(data: MentorSkillInterface): MentorSkill{
    return new MentorSkill(data);
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
      name: 'MentorSkill',
      plural: 'MentorSkills',
      path: 'MentorSkills',
      idName: 'mentorProfileId',
      properties: {
        "mentorProfileId": {
          name: 'mentorProfileId',
          type: 'number'
        },
        "skillId": {
          name: 'skillId',
          type: 'number'
        },
      },
      relations: {
        mentorProfile: {
          name: 'mentorProfile',
          type: 'MentorProfile',
          model: 'MentorProfile',
          relationType: 'belongsTo',
                  keyFrom: 'mentorProfileId',
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
