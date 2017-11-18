

module.exports = (MentorProfile) => {


  MentorProfile.validatesInclusionOf('levelOfExperience', { in: [1, 2, 3, 4, 5]});


};
