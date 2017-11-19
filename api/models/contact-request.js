

module.exports = (ContactRequest) => {

  ContactRequest.validatesInclusionOf('status', { in: ['open', 'accepted', 'declined']});

  ContactRequest.prototype.accept = accept(ContactRequest);

  ContactRequest.observe('before save', setSenderId(ContactRequest));
};

function setSenderId(ContactRequest) {

  return async (ctx) => {

    console.log('set sender id called', ctx.options.accessToken, ctx.model);

    const model = ctx.instance;
    if(!model) return null;   // we only handle single model creates

    model.senderId = ctx.options.accessToken.userId;
  }

}

function accept(ContactRequest) {

  return async (options) => {

    // update the goal
    const goal = await this.goal(options);

    goal.status = 'assigned';
    goal.mentorId = this.recipientId;

    await goal.save(options);

    // update this request
    this.status = 'accepted';

    return this.save(options);
  }

}
