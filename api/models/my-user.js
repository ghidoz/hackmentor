'use strict';

const graph = require('fbgraph');

module.exports = function (MyUser) {

  MyUser.fbAuthentication = authenticate(MyUser);
  MyUser.filterMentors = filterMentors(MyUser);

};

function filterMentors(MyUser) {

  return async (filter, options) => {

    filter = filter || {};

    const skillIds = filter.skillIds || [];
    const pricePerHour = filter.pricePerHour || {};
    const hoursPerWeek = filter.hoursPerWeek || {};
    const levelOfExperience = filter.levelOfExperience || {};
    const location = filter.location;

    const offset = filter.offset || 0;
    const limit = filter.limit || 10;

    const connector = MyUser.dataSource.connector;

    const skillsClause = skillIds.length > 0 ? `AND ms.skillId IN (${skillIds.join(',')})` : '';

    const sql = `                                                                                       \
        SELECT                                                                                            \
          DISTINCT(u.id),\
          mp.levelOfExperience                                                                                           \
        FROM \`MyUser\` u                                                                                 \
        LEFT JOIN \`MentorProfile\` mp ON u.mentorProfileId = mp.id                                       \
        WHERE                                                                                             \
          u.mentorProfileId IS NOT NULL AND                                                               \
          mp.pricePerHour BETWEEN ${pricePerHour.min || 0} AND ${pricePerHour.max || 1000} AND               \
          mp.hoursPerWeek BETWEEN ${hoursPerWeek.min || 0} AND ${hoursPerWeek.max || 40} AND                 \
          mp.levelOfExperience BETWEEN ${levelOfExperience.min || 1} AND ${levelOfExperience.max || 5} AND   \
          u.id IN (                                                                                           \
            SELECT                                                                                        \
              DISTINCT(u.id)                                                                              \
            FROM \`MyUser\` u                                                                             \
              LEFT JOIN \`MentorProfile\` mp ON u.mentorProfileId = mp.id                                 \
              LEFT JOIN \`MentorSkill\` ms ON mp.id = ms.mentorProfileId                                  \
            WHERE                                                                                         \
              u.mentorProfileId IS NOT NULL ${skillsClause}                                                         \
                                                                 \
          )                                                                                               \
        ORDER BY                                                                                          \
          mp.levelOfExperience DESC                                                                       \
        LIMIT ${limit} OFFSET ${offset};`;

    const userIds = await new Promise((resolve, reject) => {
      connector.execute(sql, null, options, (err, result) => {
        if (err) return reject(err);
        resolve(result.map((r) => r.id));
      });
    });

    return MyUser.find({ where: { id: { inq: userIds } }, include: 'mentorProfile'});
  }

}

function authenticate(MyUser) {

  return async (facebookToken, options) => {

    const profile = await getProfile(facebookToken);
    const AccessToken = MyUser.app.models.AccessToken;

    const data = {
      email: profile.email,
      fbId: profile.id,
      password: 'pa55word',
      firstName: profile.first_name,
      familyName: profile.last_name,
      profilePic: profile.picture.data.url,
      location: profile.location ? profile.location.name : null
    };

    const result = await MyUser.findOrCreate({where: {fbId: data.fbId}}, data, options);
    const user = result[0];

    const accessToken = await user.createAccessToken();

    return AccessToken.findOne({where: {id: accessToken.id}, include: 'user'})
  }

}

function getProfile(accessToken) {

  return new Promise((resolve, reject) => {
    graph.get(`/me?access_token=${accessToken}&fields=id,first_name,last_name,picture.type(large),email,location,timezone`, (err, result) => {
      if (err) return reject(err);
      resolve(result);
    });
  });

}
