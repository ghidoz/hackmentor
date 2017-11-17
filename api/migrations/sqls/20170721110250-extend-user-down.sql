ALTER TABLE `PechUser`
DROP COLUMN `firstName`,
DROP COLUMN `familyName`;

RENAME TABLE `PechUser` TO `User`;
