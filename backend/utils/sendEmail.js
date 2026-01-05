const nodemailer = require("nodemailer");

// Create transporter
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Send trial email to admin
const sendTrialEmail = async (trialData) => {
  try {
    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #4F46E5;">🎓 New Trial Request - SkyReti Educore</h2>
        <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #374151;">School Details</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #e2e8f0;"><strong>Contact Person:</strong></td>
              <td style="padding: 8px; border-bottom: 1px solid #e2e8f0;">${trialData.name}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #e2e8f0;"><strong>Organization:</strong></td>
              <td style="padding: 8px; border-bottom: 1px solid #e2e8f0;">${trialData.organization}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #e2e8f0;"><strong>Email:</strong></td>
              <td style="padding: 8px; border-bottom: 1px solid #e2e8f0;">${trialData.email}</td>
            </tr>
            <tr>
              <td style="padding: 8px;"><strong>Message:</strong></td>
              <td style="padding: 8px;">${trialData.message || 'No message provided'}</td>
            </tr>
          </table>
        </div>
        <p style="color: #64748b;">This request was submitted at ${new Date().toLocaleString()}</p>
      </div>
    `;

    await transporter.sendMail({
      from: `"SkyReti Educore" <${process.env.EMAIL_USER}>`,
      to: process.env.ADMIN_EMAIL,
      subject: `New Trial Request: ${trialData.organization}`,
      html
    });

    console.log('📧 Trial email sent to admin');
    return true;
  } catch (error) {
    console.error('❌ Error sending trial email:', error);
    return false;
  }
};

// Send confirmation email to requester
const sendConfirmationEmail = async (trialData) => {
  try {
    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="text-align: center; margin-bottom: 30px;">
          <h1 style="color: #4F46E5;">SkyReti Educore</h1>
          <p style="color: #64748b;">Premium Education Management System</p>
        </div>
        
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; border-radius: 8px; text-align: center; margin-bottom: 30px;">
          <h2 style="margin: 0; font-size: 24px;">Thank You for Your Interest!</h2>
          <p style="margin: 10px 0 0; opacity: 0.9;">Your trial request has been received successfully.</p>
        </div>
        
        <div style="background: #f8fafc; padding: 25px; border-radius: 8px; margin-bottom: 25px;">
          <h3 style="color: #374151; margin-top: 0;">Request Details</h3>
          <p><strong>Name:</strong> ${trialData.name}</p>
          <p><strong>Organization:</strong> ${trialData.organization}</p>
          <p><strong>Reference ID:</strong> TRIAL-${Date.now().toString().slice(-6)}</p>
          <p><strong>Request Date:</strong> ${new Date().toLocaleDateString()}</p>
        </div>
        
        <div style="text-align: center; margin: 30px 0;">
          <p style="color: #64748b;">Our team will contact you within 24 hours to discuss your requirements.</p>
          <p style="margin: 10px 0;">
            <strong>📞 Phone:</strong> +91 123 456 7890<br>
            <strong>📧 Email:</strong> ${process.env.ADMIN_EMAIL}
          </p>
        </div>
        
        <div style="border-top: 1px solid #e2e8f0; padding-top: 20px; text-align: center;">
          <p style="color: #94a3b8; font-size: 12px;">
            © ${new Date().getFullYear()} SkyReti Educore. All rights reserved.<br>
            This is an automated message, please do not reply.
          </p>
        </div>
      </div>
    `;

    await transporter.sendMail({
      from: `"SkyReti Educore" <${process.env.EMAIL_USER}>`,
      to: trialData.email,
      subject: "Trial Request Received - SkyReti Educore",
      html
    });

    console.log('📧 Confirmation email sent to:', trialData.email);
    return true;
  } catch (error) {
    console.error('❌ Error sending confirmation email:', error);
    return false;
  }
};

// Test email connection
const testEmailConnection = async () => {
  try {
    await transporter.verify();
    console.log('✅ Email server is ready to send messages');
    return true;
  } catch (error) {
    console.error('❌ Email server connection failed:', error);
    return false;
  }
};

module.exports = {
  sendTrialEmail,
  sendConfirmationEmail,
  testEmailConnection
};