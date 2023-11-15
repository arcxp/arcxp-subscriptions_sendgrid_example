const sendEmail = require("../sendEmail");

const deleteEmailGroupSubHandler = async (event) => {

    const msg = {
      to: event?.body?.email,
      from: process.env.EMAIL_SENDER,
      // Please update templateId with correct value
      templateId: 'd-a2ead2d538b3432aa570c14a737829f7',
      dynamic_template_data: {
        firstName: event?.body?.firstName,
        email: event?.body?.email,
        emailDomain: event?.body?.emailDomain
      }
    }

    await sendEmail(msg);
}
  
module.exports = deleteEmailGroupSubHandler;