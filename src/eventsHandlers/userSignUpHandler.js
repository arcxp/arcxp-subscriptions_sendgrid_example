const sendEmail = require("../sendEmail");

const userSignUpHandler = async (event) => {

    const msg = {
      to: event?.body?.email,
      from: process.env.EMAIL_SENDER,
      // Please update templateId with correct value
      templateId: 'd-7e7da77f8bbf499580e39134e90bc66e',
      dynamic_template_data: {
        firstName: event?.body?.firstName,
        email: event?.body?.email
      }
    }

    await sendEmail(msg);
}
  
module.exports = userSignUpHandler;

