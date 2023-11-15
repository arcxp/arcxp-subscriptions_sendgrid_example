const sendEmail = require("../sendEmail");

const giftSubscriptionPurchaseHandler = async (event) => {

    const msg = {
      to: event?.body?.email,
      from: process.env.EMAIL_SENDER,
      // Please update templateId with correct value
      templateId: 'd-7e929a76fd304d32806070a614666785',
      dynamic_template_data: {
        firstName: event?.body?.firstName,
        email: event?.body?.email
      }
    }

    await sendEmail(msg);
}
  
module.exports = giftSubscriptionPurchaseHandler;