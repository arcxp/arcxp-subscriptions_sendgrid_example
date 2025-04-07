const sendEmail = require("../sendEmail");

const orderConfirmationHandler = async (event) => {
  const date = typeof event?.body?.paymentDate === 'string' ? parseInt(event?.body?.paymentDate) : event?.body?.paymentDate;
  const paymentDate = new Date(date).toLocaleDateString();

    const msg = {
      to: event?.body?.email,
      from: process.env.EMAIL_SENDER,
      // Please update templateId with correct value
      templateId: 'd-acdb510bbf934a309ef2160021a0d364',
      dynamic_template_data: {
        firstName: event?.body?.firstName,
        email: event?.body?.email,
        paymentDate: paymentDate,
        paymentAmount: event?.body?.paymentAmount,
        paymentMethod: event?.body?.paymentMethod
      }
    }

    await sendEmail(msg);
}
  
module.exports = orderConfirmationHandler;