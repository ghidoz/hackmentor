


module.exports = (Goal) => {

  Goal.validatesInclusionOf('status', { in: ['open', 'assigned', 'completed', 'archived']});

};
