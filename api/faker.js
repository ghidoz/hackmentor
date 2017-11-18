const faker = require('faker');
const moment = require('moment');

// id, email, firstName, familyName, fbId

const apprentices = [];

for(let userId = 1; userId < 1000; userId++) {

  const user = {
    id: userId,
    email: faker.internet.email(),
    firstName: faker.name.firstName(),
    familyName: faker.name.lastName(),
    fbId: userId + 10000000000
  };

  let sql = `INSERT INTO \`MyUser\` (\`id\`, \`email\`, \`firstName\`, \`familyName\`, \`fbId\`) VALUES (${user.id}, "${user.email}", "${user.firstName}", "${user.familyName}", ${user.fbId} );`;

  console.log(sql);

  // languages

  const languageIds = [];
  const languageCount = faker.random.number(3);

  do {
    const languageId = faker.random.number(9) + 1;
    if(languageIds.indexOf(languageId) === -1) languageIds.push(languageId);
  } while(languageIds.length < languageCount);

  const languages = [];

  for(const languageId of languageIds) {

    languages.push({ languageId: languageId, userId: user.id });

    sql = `INSERT INTO \`UserLanguage\` (\`userId\`, \`languageId\`) VALUES (${user.id}, ${languageId});`;
    console.log(sql);

  }

  // goals

  const goalCount = faker.random.number(3) + 1;
  const goals = [];

  for(let i=0; i<goalCount; i++) {

    const createdAt = moment(faker.date.recent(150)).format("YYYY-MM-DD HH:mm:ss");

    const goal = {
      hoursPerWeek: faker.random.number(40) + 1,
      weeklyBudget: faker.random.number(500000) + 10,
      headline: faker.lorem.sentences(1),
      description: faker.lorem.sentences(4),
      apprenticeId: user.id,
      status: 'open',
      createdAt: createdAt,
      updatedAt: createdAt
    };

    goals.push(goal);

    sql = `INSERT INTO \`Goal\` (\`hoursPerWeek\`, \`weeklyBudget\`, \`headline\`, \`description\`, \`status\`, \`apprenticeId\`, \`createdAt\`, \`updatedAt\`) VALUES (${goal.hoursPerWeek}, ${goal.weeklyBudget}, "${goal.headline}", "${goal.description}", "${goal.status}", ${goal.apprenticeId}, "${goal.createdAt}", "${goal.updatedAt}");`;

    console.log(sql);
  }

  user.languages = languages;
  user.goals = goals;
  apprentices.push(user);

}

for(let userId=apprentices.length + 1; userId < (apprentices.length + 1000); userId++) {

  const createdAt = moment(faker.date.recent(150)).format("YYYY-MM-DD HH:mm:ss");

  const user = {
    id: userId,
    email: faker.internet.email(),
    firstName: faker.name.firstName(),
    familyName: faker.name.lastName(),
    fbId: userId + 10000000000,
    createdAt: createdAt,
    updatedAt: createdAt
  };

  const mentorProfile = {
    id: userId - apprentices.length,
    hoursPerWeek: faker.random.number(40) + 1,
    pricePerHour: faker.random.number(200),
    levelOfExperience: faker.random.number(5) + 1,
    headline: faker.lorem.sentences(1),
    description: faker.lorem.sentences(4),
    createdAt: createdAt,
    updatedAt: createdAt
  };

  user.mentorProfileId = mentorProfile.id;

  let sql = `INSERT INTO \`MentorProfile\` (\`id\`, \`hoursPerWeek\`, \`pricePerHour\`, \`levelOfExperience\`, \`headline\`, \`description\`, \`createdAt\`, \`updatedAt\`) VALUES (${mentorProfile.id}, ${mentorProfile.hoursPerWeek}, ${mentorProfile.pricePerHour}, ${mentorProfile.levelOfExperience}, "${mentorProfile.headline}", "${mentorProfile.description}",  "${mentorProfile.createdAt}", "${mentorProfile.updatedAt}");`;
  console.log(sql);

  sql = `INSERT INTO \`MyUser\` (\`id\`, \`email\`, \`firstName\`, \`familyName\`, \`fbId\`) VALUES (${user.id}, "${user.email}", "${user.firstName}", "${user.familyName}", ${user.fbId} );`;
  console.log(sql);

  // languages

  const languageIds = [];
  const languageCount = faker.random.number(3);

  do {
    const languageId = faker.random.number(9) + 1;
    if(languageIds.indexOf(languageId) === -1) languageIds.push(languageId);
  } while(languageIds.length < languageCount);

  const languages = [];

  for(const languageId of languageIds) {

    languages.push({ languageId: languageId, userId: user.id });

    sql = `INSERT INTO \`UserLanguage\` (\`userId\`, \`languageId\`) VALUES (${user.id}, ${languageId});`;
    console.log(sql);

  }

  // skills

  const skillIds = [];
  const skillCount = faker.random.number(10) + 1;

  do {
    const skillId = faker.random.number(18) + 1;
    if(skillIds.indexOf(skillId) === -1) skillIds.push(skillId);
  } while(skillIds.length < skillCount);

  const skills = [];

  for(const skillId of skillIds) {

    skills.push({ skillId: skillId, userI: user.id });

    sql = `INSERT INTO \`MentorSkill\` (\`mentorProfileId\`, \`skillId\`) VALUES (${mentorProfile.id}, ${skillId});`;
    console.log(sql);

  }


}
