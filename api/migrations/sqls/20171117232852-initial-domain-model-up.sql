/* Replace with your SQL commands */

ALTER TABLE `MyUser`
  ADD COLUMN `fbId` BIGINT NOT NULL,
  ADD COLUMN `location` VARCHAR(128) NULL,
  ADD COLUMN `mentorProfileId` INT(11) NULL,
  ADD COLUMN `apprenticeProfileId` INT(11) NULL,
  ADD COLUMN `createdAt` DATETIME NOT NULL DEFAULT NOW(),
  ADD COLUMN `updatedAt` DATETIME NOT NULL DEFAULT NOW();

CREATE TABLE `Language` (
  `id` INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `code` VARCHAR(2) NOT NULL,
  `name` VARCHAR(64) NOT NULL,
  `createdAt` DATETIME NOT NULL DEFAULT NOW(),
  `updatedAt` DATETIME NOT NULL DEFAULT NOW()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `UserLanguage` (
  `userId` INT(11) NOT NULL,
  `languageId` INT(11) NOT NULL,
  `createdAt` DATETIME NOT NULL DEFAULT NOW()
);

ALTER TABLE `UserLanguage`
  ADD CONSTRAINT `fk_UserLanguage_MyUser_userId` FOREIGN KEY (userId) REFERENCES `MyUser` (`id`);

ALTER TABLE `UserLanguage`
  ADD CONSTRAINT `fk_UserLanguage_Language_languageId` FOREIGN KEY (languageId) REFERENCES `Language` (`id`);

CREATE TABLE `HeroCategory` (
  `id` INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(64) NOT NULL,
  `createdAt` DATETIME NOT NULL DEFAULT NOW(),
  `updatedAt` DATETIME NOT NULL DEFAULT NOW()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `Skill` (
  `id` INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(64) NOT NULL,
  `createdAt` DATETIME NOT NULL DEFAULT NOW(),
  `updatedAt` DATETIME NOT NULL DEFAULT NOW()
);

CREATE TABLE `HeroSkill` (
  `heroId` INT(11) NOT NULL,
  `skillId` INT(11) NOT NULL,
  `createdAt` DATETIME NOT NULL DEFAULT NOW()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

ALTER TABLE `HeroSkill`
  ADD CONSTRAINT `fk_HeroSkill_Hero_heroId` FOREIGN KEY (heroId) REFERENCES `HeroCategory` (`id`);

ALTER TABLE `HeroSkill`
  ADD CONSTRAINT `fk_HeroSkill_Skill_skillId` FOREIGN KEY (skillId) REFERENCES `Skill` (`id`);


CREATE TABLE `MentorProfile` (
  `id` INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `hoursPerWeek` INT(2) NOT NULL,
  `pricePerHour` INT(3) NOT NULL,
  `levelOfExperience` VARCHAR(64) NOT NULL,
  `headline` VARCHAR(256) NOT NULL,
  `description` VARCHAR(2048) NULL,
  `createdAt` DATETIME NOT NULL DEFAULT NOW(),
  `updatedAt` DATETIME NOT NULL DEFAULT NOW()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `MentorSkill` (
  `mentorProfileId` INT(11) NOT NULL,
  `skillId` INT(11) NOT NULL,
  `createdAt` DATETIME NOT NULL DEFAULT NOW()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

ALTER TABLE `MentorSkill`
  ADD CONSTRAINT `fk_MentorSkill_MentorProfile_userId` FOREIGN KEY (mentorProfileId) REFERENCES `MentorProfile` (`id`);

ALTER TABLE `MentorSkill`
  ADD CONSTRAINT `fk_MentorSkill_Skill_skillId` FOREIGN KEY (skillId) REFERENCES `Skill` (`id`);


CREATE TABLE `Goal` (
  `id` INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `hoursPerWeek` INT(2) NOT NULL,
  `weeklyBudget` INT(6) NOT NULL,
  `headline` VARCHAR(256) NOT NULL,
  `description` VARCHAR(2048) NULL,
  `status` VARCHAR(20) NOT NULL,
  `apprenticeId` INT(11) NOT NULL,
  `mentorId` INT(11) NULL,
  `createdAt` DATETIME NOT NULL DEFAULT NOW(),
  `updatedAt` DATETIME NOT NULL DEFAULT NOW()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

ALTER TABLE `Goal`
  ADD CONSTRAINT `fk_Goal_MyUser_apprenticeId` FOREIGN KEY (apprenticeId) REFERENCES `MyUser` (`id`);

ALTER TABLE `Goal`
  ADD CONSTRAINT `fk_Goal_MyUser_mentorId` FOREIGN KEY (mentorId) REFERENCES `MyUser` (`id`);

CREATE TABLE `GoalSkill` (
  `goalId` INT(11) NOT NULL,
  `skillId` INT(11) NOT NULL,
  `level` VARCHAR(64) NOT NULL,
  `createdAt` DATETIME NOT NULL DEFAULT NOW()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

ALTER TABLE `GoalSkill`
  ADD CONSTRAINT `fk_GoalSkill_Goal_userId` FOREIGN KEY (goalId) REFERENCES `Goal` (`id`);

ALTER TABLE `GoalSkill`
  ADD CONSTRAINT `fk_GoalSkill_Skill_skillId` FOREIGN KEY (skillId) REFERENCES `Skill` (`id`);

CREATE TABLE `ContactRequest` (
  `id` INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `senderId` INT(11) NOT NULL,
  `recipientId` INT (11) NOT NULL,
  `goalId` INT (11) NOT NULL,
  `message` VARCHAR(2048) NOT NULL,
  `status` VARCHAR(20) NOT NULL,
  `createdAt` DATETIME NOT NULL DEFAULT NOW(),
  `updatedAt` DATETIME NOT NULL DEFAULT NOW()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

ALTER TABLE `ContactRequest`
  ADD CONSTRAINT `fk_ContactRequest_MyUser_senderId` FOREIGN KEY (senderId) REFERENCES `MyUser` (`id`);

ALTER TABLE `ContactRequest`
  ADD CONSTRAINT `fk_ContactRequest_MyUser_recipientId` FOREIGN KEY (recipientId) REFERENCES `MyUser` (`id`);

ALTER TABLE `ContactRequest`
  ADD CONSTRAINT `fk_ContactRequest_Goal_goalId` FOREIGN KEY (goalId) REFERENCES `Goal` (`id`);
