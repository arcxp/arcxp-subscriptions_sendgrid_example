const sendEmail = require("../sendEmail");

const giftRecipientSetHandler = async (event) => {

    const msg = {
      to: event?.body?.email,
      from: process.env.EMAIL_SENDER,
      // Please update templateId with correct value
      templateId: 'd-12a37bb0cd084a0c97dbe647f81452c3',
      dynamic_template_data: {
        firstName: event?.body?.firstName,
        email: event?.body?.email
      }
    }

    await sendEmail(msg);
}
  
module.exports = giftRecipientSetHandler;