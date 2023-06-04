const nodemailer = require("nodemailer");

const sendMail = (to, subject, message) => {
  const transporter = nodemailer.createTransport({
    service: "outlook",
    auth: {
      user: "@email.com",
      pass: "",
    },
  });

  const options = {
    from: "@email.com",
    to,
    subject,
    text: message,
  };

  transporter.sendMail(options, (error) => {
    console.log("error", error);
    if (error) console.log(`Failed Sent ❌: ${to}`);
    else console.log(`Email Sent ✅: ${to}`);
  });
};

const data = [];

let index = 0;

const myInterval = setInterval(myTimer, 5000);

function myTimer() {
  if (index === data.length) {
    myStop();
  } else {
    const { Name, Email } = data[index++];
    sendMail(Email, `xxx`, `Hi ${Name}\n\nThanks, Eric`);
  }
}

function myStop() {
  clearInterval(myInterval);
}
