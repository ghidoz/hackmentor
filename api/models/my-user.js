'use strict';

module.exports = function(PechUser) {

  PechUser.ROLES = {
    ADMIN: 'admin',
    CONTROLLER: 'controller'
  };

  PechUser.observe('after save', updateRoleMappings(PechUser));
  PechUser.observe('after delete', cleanupRoleMappings(PechUser));

  PechUser.rolesForUser = rolesForUser(PechUser);

};

function rolesForUser(PechUser){

  return function(userId) {

    var RoleMapping = PechUser.app.models.RoleMapping;

    return RoleMapping.find({
      where: {principalType: RoleMapping.USER, principalId: userId},
      include: ['role']
    }).then(function (roleMappings) {
      return roleMappings.map(function (rm) { return rm.toJSON().role.name; });
    });

  };

}

function updateRoleMappings(PechUser) {


  return function(ctx, next) {
    const RoleMapping = PechUser.app.models.RoleMapping;
    const model = ctx.instance;
    const roles = ctx.options.req.body.roles;

    if (!roles) return next();

    RoleMapping
      .destroyAll({ principalType: RoleMapping.USER, principalId: model.id })
      .then(function(){
        const roleMappings = roles.map(function(role){
          return { roleId: role, principalType: RoleMapping.USER, principalId: model.id }
        });
        return RoleMapping.create(roleMappings);
      })
      .then(function(){
        next();
      })
      .catch(function(err){
        next(err);
      });
  }

}

function cleanupRoleMappings(PechUser) {

  return function(ctx, next) {

    if(!(ctx.where || ctx.where.id)) return next();

    const RoleMapping = PechUser.app.models.RoleMapping;

    RoleMapping
      .destroyAll({ principalType: RoleMapping.USER, principalId: ctx.where.id })
      .then(function(){
        next();
      })
      .catch(function(err){
        next(err);
      });

  }


}

function qualityReportsForUser(PechUser) {

  PechUser.remoteMethod(
    'qualityReportsForUser', {
      accepts: [
        { arg: 'filter', type: 'object' },
        { arg: 'options', type: 'object', http: 'optionsFromRequest'}
      ],
      description: "Returns the quality reports for a given user",
      returns: { root: true, type: 'object' },
      http: { arg: 'get', path: '/quality-reports' }
    }
  );

  return function(filter, options, cb) {

    const userId = options && options.accessToken && options.accessToken.userId;

    if(!userId) return cb(new Error('Could not determine userId'));

    const QualityReport = PechUser.app.models.QualityReport;

    PechUser.rolesForUser(options.accessToken.userId)
      .then(function(roles) {

        if(roles.indexOf(PechUser.ROLES.ADMIN) > -1) return filter;

        if(roles.indexOf(PechUser.ROLES.CONTROLLER) > -1) {
          filter.controllerId = userId;
          return filter;
        }

        throw new Error('Could not find Controller or Admin role for user');

      })
      .then(function(filter){
        return QualityReport.find(filter);
      })
      .then(function(results){
        return cb(null, results);
      })
      .catch(function(err){
        return cb(err);
      });

  };

}
