'use strict';

const graph = require('fbgraph');

module.exports = function(MyUser) {

  MyUser.authenticate = authenticate(MyUser);

};


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
      location: profile.location ? profile.location.name : null
    };

    const result = await MyUser.findOrCreate({ where: { fbId: data.fbId }}, data, options);
    const user = result[0];

    const accessToken = await user.createAccessToken();

    return AccessToken.find({ where: { id: accessToken.id }, include: 'user'})
  }

}

function getProfile(accessToken) {

  return new Promise((resolve, reject) => {
    graph.get(`/me?access_token=${accessToken}&fields=id,first_name,last_name,email,location,timezone`, (err, result) => {
      if(err) return reject(err);
      resolve(result);
    });
  });

}
