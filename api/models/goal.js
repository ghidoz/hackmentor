
module.exports = (Goal) => {

  Goal.validatesInclusionOf('status', { in: ['open', 'assigned', 'completed', 'archived']});

  Goal.myGoals = myGoals(Goal);
};

function myGoals(Goal) {

  return async (options) => {

    const userId = options.accessToken.userId;

    return Goal.find({ where: { apprenticeId: userId }});
  }

}
