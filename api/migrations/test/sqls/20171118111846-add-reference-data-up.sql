/* Replace with your SQL commands */

INSERT INTO `HeroCategory` (`id`, `name`) VALUES
  (1, 'Programming Languages'),
  (2, 'Web Frameworks'),
  (3, 'Storage Technologies');

INSERT INTO `Skill` (`id`, `name`) VALUES
  (1, 'Angular1'),
  (2, 'Angular2'),
  (3, 'Angular4'),
  (4, 'Vue'),
  (5, 'React'),
  (6, 'React Native'),
  (7, 'Polymer'),
  (8, 'MySQL'),
  (9, 'MongoDB'),
  (10, 'Cassandra'),
  (11, 'Apache Kafka'),
  (12, 'Apache Spark'),
  (13, 'Java'),
  (14, 'Scala'),
  (15, 'Javascript'),
  (16, 'C#'),
  (17, 'C++'),
  (18, 'Rust'),
  (19, 'Kotlin');

INSERT INTO `HeroSkill` (heroCategoryId, `skillId`) VALUES
  (1, 13),
  (1, 14),
  (1, 15),
  (1, 16),
  (1, 17),
  (1, 18),
  (1, 19),
  (2, 1),
  (2, 2),
  (2, 3),
  (2, 4),
  (2, 5),
  (2, 6),
  (2, 7),
  (3, 8),
  (3, 9),
  (3, 10);

INSERT INTO `Language` (`id`,`name`) VALUES
  (1,'English (UK)'),
  (2,'English (US)'),
  (3,'Spanish'),
  (4,'French'),
  (5,'Catalan'),
  (6,'German'),
  (7,'Italian'),
  (8,'Portuguese'),
  (9,'Dutch'),
  (10,'Polish');
