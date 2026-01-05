const twilio = require("twilio");

const client = new twilio(
  process.env.TWILIO_SID,
  process.env.TWILIO_AUTH
);

module.exports = (message) => {
  client.messages.create({
    from: `whatsapp:${process.env.TWILIO_WHATSAPP}`,
    to: `whatsapp:${process.env.ADMIN_WHATSAPP}`,
    body: message
  });
};
