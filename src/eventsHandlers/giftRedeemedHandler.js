const sendEmail = require("../sendEmail");

const giftRedeemedHandler = async (event) => {

    const msg = {
      to: event?.body?.email,
      from: process.env.EMAIL_SENDER,
      // Please update templateId with correct value
      templateId: 'd-6a8d757bfbcd4a41b3bc056464bcb06f',
      dynamic_template_data: {
        firstName: event?.body?.firstName,
        email: event?.body?.email
      }
    }

    await sendEmail(msg);
}
  
module.exports = giftRedeemedHandler;