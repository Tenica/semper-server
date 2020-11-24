// const sgMail = require('@sendgrid/mail')
// sgMail.setApiKey(process.env.SENDGRID_API_KEY)




// const SemperUser = (email, name) => {
//     sgMail.send({
//         to: email,
//         from: 'mmaduabuchichisom99@gmail.com',
//         subject: 'TrailBlazers Insurance Brokers',
//         text: ` Hello ${name},Welcome to TrailBlazers Insurance Brokers, we guarantee the best insurance services money can buy`
//     }).then(() => {
//         console.log('Message sent')
//     }).catch((error) => {
//         console.log(error.response.body)
        
//     })
// }
// ;  
//  module.exports = {
//     SemperUser
// }

const emailConfig = require('./userConfig')();
const mailgun = require('mailgun-js')(emailConfig);
exports.sendEmail = (email, firstName) =>
  new Promise((resolve, reject) => {
    const data = {
      from: 'cicoldboysassociation@gmail.com',
      to: email,
      subject: 'Semper 09',
      text: ` Hello ${firstName},Welcome to TrailBlazers Insurance Brokers, we guarantee the best insurance services money can buy`,
      
    };

    mailgun.messages().send(data, (error) => {
      if (error) {
        return reject(error);
      }
      return resolve();
    });
  }).then(() => {
      console.log('message sent')
  }).catch((e) => {
      console.log(e)
  });


  