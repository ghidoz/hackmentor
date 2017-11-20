ALTER TABLE `MyUser`
DROP COLUMN `firstName`,
DROP COLUMN `familyName`;

RENAME TABLE `MyUser` TO `User`;
