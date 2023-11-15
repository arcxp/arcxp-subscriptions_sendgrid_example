const sendEmail = require("../sendEmail");

const abandonedCartHandler = async (event) => {

    const msg = {
      to: event?.body?.email,
      from: process.env.EMAIL_SENDER,
      // Please update templateId with correct value
      templateId: 'd-a5398aee7fe44f38b572458fae557bdd',
      dynamic_template_data: {
        firstName: event?.body?.firstName,
        email: event?.body?.email
      }
    }

    await sendEmail(msg);
}
  
module.exports = abandonedCartHandler;