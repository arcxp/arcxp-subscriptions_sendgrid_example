const sendEmail = require("../sendEmail");

const passwordResetRequestHandler = async (event) => {

    const msg = {
      to: event?.body?.email,
      from: process.env.EMAIL_SENDER,
      // Please update templateId with correct value
      templateId: 'd-876ee87508144726b75779db17a46116',
      dynamic_template_data: {
        firstName: event?.body?.firstName,
        WEB_SITE_URL: process.env.WEB_SITE_URL,
        email: event?.body?.email,
        nonce: event?.body?.nonce
      }
    }

    await sendEmail(msg);
}
  
module.exports = passwordResetRequestHandler;

