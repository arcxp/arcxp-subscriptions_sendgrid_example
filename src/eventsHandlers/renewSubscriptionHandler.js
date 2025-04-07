const sendEmail = require("../sendEmail");

const renewSubscriptionHandler = async (event) => {

    const msg = {
      to: event?.body?.email,
      from: process.env.EMAIL_SENDER,
      // Please update templateId with correct value
      templateId: 'd-9ec769aeeb304495a17a2107405c16a3',
      dynamic_template_data: {
        firstName: event?.body?.firstName,
        email: event?.body?.email,
        productName: event?.body?.productName
      }
    }

    await sendEmail(msg);
}
  
module.exports = renewSubscriptionHandler;