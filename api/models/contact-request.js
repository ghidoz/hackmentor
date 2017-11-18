

module.exports = (ContactRequest) => {

  ContactRequest.validatesInclusionOf('status', { in: ['open', 'accepted', 'declined']});


};
