module.exports = () => {
    const emailConfig = {
      apiKey: process.env.MAILGUN_API_KEY,
      domain: 'mailer.cic09.com'
    };
  return emailConfig;
  };