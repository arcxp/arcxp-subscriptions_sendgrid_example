const sendEmail = require("../sendEmail");

const startSubscriptionHandler = async (event) => {

    const msg = {
      to: event?.body?.email,
      from: process.env.EMAIL_SENDER,
      // Please update templateId with correct value
      templateId: 'd-db25fbdbe33f46a28c9408a948f29e4d',
      dynamic_template_data: {
        firstName: event?.body?.firstName,
        email: event?.body?.email,
        productName: event?.body?.productName
      }
    }

    await sendEmail(msg);
}
  
module.exports = startSubscriptionHandler;