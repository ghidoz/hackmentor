

module.exports = (ContactRequest) => {

  ContactRequest.validatesInclusionOf('status', { in: ['open', 'accepted', 'declined']});

<<<<<<< Updated upstream
  ContactRequest.prototype.accept = accept;

  ContactRequest.observe('before save', setFieldsOnCreate);
};

async function setFieldsOnCreate(ctx) {

    const model = ctx.instance;
    if(!(model && ctx.isNewInstance)) return;   // we only handle single model creates

    model.senderId = ctx.options.accessToken.userId;
    model.status = 'open';

}

async function accept(options) {

    // update the goal
    const goal = await this.goal(options);

    goal.status = 'assigned';
    goal.mentorId = this.recipientId;

    await goal.save(options);

    // update this request
    this.status = 'accepted';

    return this.save(options);
=======
  ContactRequest.myContactRequests = myContactRequests(ContactRequest);
};

function myContactRequests(ContactRequest) {

 return async (options) => {

   const userId = options.accessToken.userId;

   return ContactRequest.find({ where: { apprenticeId: userId }});
 }
>>>>>>> Stashed changes

}
