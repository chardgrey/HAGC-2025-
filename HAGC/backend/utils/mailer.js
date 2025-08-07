const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.ADMIN_EMAIL,       // Your Gmail
    pass: process.env.ADMIN_EMAIL_PASS   // App password (not regular password)
  }
});

exports.sendAdoptionNotification = async (application) => {
  const mailOptions = {
    from: process.env.ADMIN_EMAIL,
    to: process.env.ADMIN_EMAIL,  // Send to admin
    subject: '🐾 New Adoption Application Received',
    html: `
      <h3>New Adoption Application</h3>
      <p><strong>User:</strong> ${application.userId}</p>
      <p><strong>Pet:</strong> ${application.petId}</p>
      <p><strong>Message:</strong> ${application.message}</p>
    `
  };

  await transporter.sendMail(mailOptions);
};
