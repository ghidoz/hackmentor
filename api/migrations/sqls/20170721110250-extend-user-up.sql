RENAME TABLE `User` TO `MyUser`;

ALTER TABLE `MyUser`
ADD COLUMN `firstName` VARCHAR(64),
ADD COLUMN `familyName` VARCHAR(128);