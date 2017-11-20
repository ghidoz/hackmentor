


module.exports = (Goal) => {

  Goal.validatesInclusionOf('status', { in: ['open', 'assigned', 'completed', 'archived']});

  Goal.myGoals = myGoals(Goal);

  Goal.observe('after save', updateGoalSkills(Goal));
};

function myGoals(Goal) {

  return async (options) => {

    const userId = options.accessToken.userId;

    return Goal.find({ where: { apprenticeId: userId }});
  }

}

function updateGoalSkills(Goal) {

  return async (ctx) => {

    const model = ctx.instance;
    const skills = ctx.options.req.body.skills;

    if(!(model && skills && Array.isArray(skills))) return;    // we only handle single model updates

    // delete all current goal skills
    await model.goalSkills.destroyAll();

    // add the new updated list
    const goalSkills = skills.map((s) => {
      if(Number.isInteger(s)) return { skillId: s };
      else if(Object.isPlainObject(s)) return { skillId: s.skillId };
    });

    await model.goalSkills.create(goalSkills);

  }

}
