const sendEmail = require("../sendEmail");

const emailVerifiedHandler = async (event) => {

    const msg = {
      to: event?.body?.email,
      from: process.env.EMAIL_SENDER,
      // Please update templateId with correct value
      templateId: 'd-5c47a3802db44d3bbe10e7239351a8a8',
      dynamic_template_data: {
        firstName: event?.body?.firstName,
        email: event?.body?.email
      }
    }

    await sendEmail(msg);
}
  
module.exports = emailVerifiedHandler;

