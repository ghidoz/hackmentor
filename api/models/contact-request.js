

module.exports = (ContactRequest) => {

  ContactRequest.validatesInclusionOf('status', { in: ['open', 'accepted', 'declined']});

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

}
