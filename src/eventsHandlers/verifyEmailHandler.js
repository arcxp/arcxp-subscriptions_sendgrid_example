const sendEmail = require('../sendEmail');

const verifyEmailHandler = async (event) => {
    const msg = {
      to: event?.body?.email,
      from: process.env.EMAIL_SENDER,
      subject: 'Please verify your account',
      // Please update templateId with correct value
      templateId: 'd-db2624673d4c4d989474ecacd1a626b3',
      dynamic_template_data: {
        firstName: event?.body?.firstName,
        CDN_ENDPOINT: process.env.CDN_ENDPOINT,
        email: event?.body?.email,
        nonce: event?.body?.nonce
      }
    }

    await sendEmail(msg);
}
  
module.exports = verifyEmailHandler;