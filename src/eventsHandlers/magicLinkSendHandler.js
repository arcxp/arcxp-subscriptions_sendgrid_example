const sendEmail = require("../sendEmail");

const magicLinkSendHandler = async (event) => {

    const msg = {
      to: event?.body?.email,
      from: process.env.EMAIL_SENDER,
      // Please update templateId with correct value
      templateId: 'd-98c34b2c11d04693a4ed21f001fbdff9',
      dynamic_template_data: {
        firstName: event?.body?.firstName,
        WEB_SITE_URL: process.env.WEB_SITE_URL,
        email: event?.body?.email,
        nonce: event?.body?.nonce
      }
    }

    await sendEmail(msg);
}
  
module.exports = magicLinkSendHandler;

