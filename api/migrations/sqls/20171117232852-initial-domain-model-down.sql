/* Replace with your SQL commands */

SET GLOBAL FOREIGN_KEY_CHECKS=0;

DROP TABLE `Language`;
DROP TABLE `UserLanguage`;
DROP TABLE `HeroCategory`;
DROP TABLE `Skill`;
DROP TABLE `HeroSkill`;
DROP TABLE `MentorProfile`;
DROP TABLE `MentorSkill`;
DROP TABLE `Goal`;
DROP TABLE `GoalSkill`;

ALTER TABLE `MyUser`
  DROP COLUMN `fbId`,
  DROP COLUMN `location`,
  DROP COLUMN `mentorProfileId`,
  DROP COLUMN `apprenticeProfileId`,
  DROP COLUMN `profilePic`,
  DROP COLUMN `createdAt`,
  DROP COLUMN `updatedAt`;

SET GLOBAL FOREIGN_KEY_CHECKS=1;
