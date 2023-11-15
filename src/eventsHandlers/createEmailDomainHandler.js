const sendEmail = require("../sendEmail");

const createEmailDomainHandler = async (event) => {

    const msg = {
      to: event?.body?.email,
      from: process.env.EMAIL_SENDER,
      // Please update templateId with correct value
      templateId: 'd-45dff30fbdb1415897df7767eaa43f39',
      dynamic_template_data: {
        firstName: event?.body?.firstName,
        email: event?.body?.email,
        emailDomain: event?.body?.emailDomain,
        accessCode: event?.body?.accessCode
      }
    }

    await sendEmail(msg);
}
  
module.exports = createEmailDomainHandler;