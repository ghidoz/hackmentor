'use strict';

module.exports = function(MyUser) {

  MyUser.ROLES = {
    ADMIN: 'admin',
    CONTROLLER: 'controller'
  };

  MyUser.observe('after save', updateRoleMappings(MyUser));
  MyUser.observe('after delete', cleanupRoleMappings(MyUser));

  MyUser.rolesForUser = rolesForUser(MyUser);

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
