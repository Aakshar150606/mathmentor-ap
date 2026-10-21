let nodemailer;
try {
  nodemailer = require('nodemailer');
} catch (e) {
  // Optional fallback
}

/**
 * Sends a real 6-digit OTP email using Gmail SMTP, Resend, or Dev Preview
 * @param {string} toEmail 
 * @param {string} otp 
 * @param {string} teacherName 
 * @returns {Promise<{ success: boolean, provider: string, previewOtp?: string }>}
 */
async function sendOtpEmail(toEmail, otp, teacherName = 'Teacher') {
  const subject = `MathMentor AP: Your Verification Code is ${otp}`;
  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #0a0e1a; color: #e2e8f0; margin: 0; padding: 20px; }
        .card { max-width: 500px; margin: 0 auto; background-color: #0f1419; border: 1px solid #00ff88; border-radius: 16px; padding: 32px; box-shadow: 0 0 30px rgba(0, 255, 136, 0.15); }
        .header { text-align: center; border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 20px; margin-bottom: 24px; }
        .badge { display: inline-block; background: rgba(0, 255, 136, 0.15); color: #00ff88; border: 1px solid #00ff88; border-radius: 8px; padding: 4px 12px; font-size: 11px; font-weight: bold; letter-spacing: 1px; }
        .title { font-size: 20px; color: #ffffff; margin-top: 12px; font-weight: 700; letter-spacing: 0.5px; }
        .otp-box { background: #050810; border: 2px dashed #00d4ff; border-radius: 12px; padding: 20px; text-align: center; margin: 28px 0; }
        .otp-code { font-family: 'Courier New', Courier, monospace; font-size: 36px; font-weight: 900; letter-spacing: 10px; color: #00ff88; text-shadow: 0 0 10px rgba(0, 255, 136, 0.5); }
        .footer { text-align: center; font-size: 11px; color: #64748b; margin-top: 24px; line-height: 1.5; }
      </style>
    </head>
    <body>
      <div class="card">
        <div class="header">
          <span class="badge">MATHMENTOR AP &bull; CLASS 10</span>
          <h1 class="title">Verify Your Instructor Account</h1>
        </div>
        <p>Namaste, <strong>${teacherName}</strong>!</p>
        <p>Welcome to MathMentor AP — Teacher Guidance Platform for AP State Board Class 10 Real Numbers (Pages 14–31).</p>
        <p>Please enter the 6-digit one-time verification code below to verify your email address and activate your account:</p>
        
        <div class="otp-box">
          <div class="otp-code">${otp}</div>
          <p style="margin: 8px 0 0 0; font-size: 12px; color: #00d4ff;">Valid for 10 minutes &bull; Do not share with anyone</p>
        </div>

        <p style="font-size: 12px; color: #94a3b8;">If you did not request this verification, you can safely ignore this email.</p>
        
        <div class="footer">
          &copy; 2026 MathMentor AP &bull; Government of Andhra Pradesh Curriculum Guidance Platform<br>
          Chapter 1: Real Numbers (Pages 14 to 31)
        </div>
      </div>
    </body>
    </html>
  `;

  // Always log prominently to terminal for developer convenience
  console.log('\n============================================================');
  console.log(`[EMAIL SERVICE] Verification OTP for ${toEmail}: >>> ${otp} <<<`);
  console.log('============================================================\n');

  // Option 1: Send via Gmail SMTP (Nodemailer) - Works for ANY recipient email in the world!
  if (nodemailer && process.env.GMAIL_USER && process.env.GMAIL_APP_PASSWORD) {
    try {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.GMAIL_USER.trim(),
          pass: process.env.GMAIL_APP_PASSWORD.trim().replace(/\s+/g, ''),
        },
      });

      await transporter.sendMail({
        from: `"MathMentor AP" <${process.env.GMAIL_USER.trim()}>`,
        to: toEmail,
        subject,
        html: htmlContent,
      });

      console.log(`[Gmail SMTP] Real email successfully delivered to ${toEmail}!`);
      return { success: true, provider: 'gmail' };
    } catch (gmailErr) {
      console.error('[Gmail SMTP Error]:', gmailErr.message);
    }
  }

  // Option 2: Send via Resend REST API (if RESEND_API_KEY is configured)
  if (process.env.RESEND_API_KEY && process.env.RESEND_API_KEY.startsWith('re_')) {
    try {
      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.RESEND_API_KEY.trim()}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: process.env.EMAIL_FROM || 'MathMentor AP <onboarding@resend.dev>',
          to: [toEmail],
          subject,
          html: htmlContent,
        }),
      });

      if (res.ok) {
        console.log(`[Resend API] Real email successfully delivered to ${toEmail}!`);
        return { success: true, provider: 'resend' };
      }
      const errText = await res.text();
      console.warn('[Resend API Notice]:', errText);
      console.log(`[Resend Notice] If you are on the Resend free test domain (onboarding@resend.dev), Resend sends to your registered Resend account email. For other emails, the code is printed in the server console: >>> ${otp} <<<`);
      return { success: true, provider: 'dev_preview', previewOtp: otp };
    } catch (apiErr) {
      console.warn('Resend API network error:', apiErr.message);
      return { success: true, provider: 'dev_preview', previewOtp: otp };
    }
  }

  // Option 2: Send via Brevo REST API (if BREVO_API_KEY is configured)
  if (process.env.BREVO_API_KEY) {
    try {
      const res = await fetch('https://api.brevo.com/v3/smtp/email', {
        method: 'POST',
        headers: {
          'api-key': process.env.BREVO_API_KEY.trim(),
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          sender: { name: 'MathMentor AP', email: process.env.EMAIL_FROM || 'noreply@mathmentor.ap' },
          to: [{ email: toEmail, name: teacherName }],
          subject,
          htmlContent,
        }),
      });

      if (res.ok) {
        return { success: true, provider: 'brevo' };
      }
      const errText = await res.text();
      console.warn('Brevo API call error:', errText);
    } catch (apiErr) {
      console.warn('Brevo API network error:', apiErr.message);
    }
  }

  // Dev preview mode (no external email API key configured yet)
  return { success: true, provider: 'dev_preview', previewOtp: otp };
}

module.exports = { sendOtpEmail };
