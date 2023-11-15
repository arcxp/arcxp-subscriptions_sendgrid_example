const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendEmail = async (msg) => {
  try {
    const response = await sgMail.send(msg);
  } catch(e) {
    console.log(e);
    if(e.response) {
      console.log('ERROR: ', e.response.body);
    }
  }
}

module.exports = sendEmail;