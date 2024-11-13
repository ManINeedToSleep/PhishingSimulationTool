// src/data/PhishingData.js

const phishingData = [
    // Phishing Emails
    {
      type: "email",
      sender: "Amazon Customer Service",
      senderEmail: "support@amazon-customerservice.com",
      subject: "Your Order Has Been Suspended – Immediate Action Required",
      date: "Nov 7, 2023, 10:15 AM",
      body: `Hello,
  
  We encountered an issue with your recent order on Amazon, and it has been suspended.
  Please click on the link below to verify your account details and resolve the issue.
  
  Verify your account: http://amazon-security.com/verify
  
  Thank you,
  Amazon Customer Service`,
      links: [
        { text: "Verify your account", url: "http://amazon-security.com/verify" }
      ],
      isPhishing: true,
      explanation: `
        <b>This is a phishing email. Here's why:</b>
        <ol>
          <li><b>Sender Email:</b> "support@amazon-customerservice.com" is a fake email address. Official Amazon emails come from "@amazon.com".</li>
          <li><b>Urgency:</b> Phishing emails often use urgent language ("Immediate Action Required") to push you to act without thinking.</li>
          <li><b>Fake Link:</b> The link provided does not direct to an Amazon domain but instead to "amazon-security.com", which is a deceptive URL.</li>
        </ol>
      `
    },
    {
      type: "email",
      sender: "PayPal Support",
      senderEmail: "security@pay-pal.com",
      subject: "Account Suspended – Urgent Verification Needed",
      date: "Oct 21, 2023, 3:45 PM",
      body: `Dear Customer,
  
  Your PayPal account has been temporarily suspended due to suspicious activity. Please verify your account to continue using our services.
  
  Verify your account here: http://paypal-verification.com
  
  Thank you,
  PayPal Support`,
      links: [
        { text: "Verify your account here", url: "http://paypal-verification.com" }
      ],
      isPhishing: true,
      explanation: `
        <b>This is a phishing email. Here's why:</b>
        <ol>
          <li><b>Sender Email:</b> "security@pay-pal.com" is a misleading email. PayPal emails come from "@paypal.com".</li>
          <li><b>Suspicious Link:</b> The link "paypal-verification.com" is not an official PayPal URL.</li>
          <li><b>Urgent Language:</b> The email creates a sense of urgency ("Account Suspended") to prompt a quick response.</li>
        </ol>
      `
    },
    {
      type: "email",
      sender: "Netflix Support",
      senderEmail: "billing@netflix-support.com",
      subject: "Payment Failed – Update Your Billing Information",
      date: "Nov 1, 2023, 6:30 PM",
      body: `Hi there,
  
  We attempted to process your recent payment, but it failed. To avoid disruption, please update your billing information by clicking on the link below.
  
  Update billing information: http://netflix-payments.com/update
  
  Thanks,
  Netflix Support`,
      links: [
        { text: "Update billing information", url: "http://netflix-payments.com/update" }
      ],
      isPhishing: true,
      explanation: `
        <b>This is a phishing email. Indicators include:</b>
        <ol>
          <li><b>Sender Email:</b> "billing@netflix-support.com" is not an official Netflix domain; Netflix emails come from "@netflix.com".</li>
          <li><b>Fake URL:</b> The link "netflix-payments.com" is deceptive and not associated with Netflix.</li>
          <li><b>Threat of Service Disruption:</b> The email pressures you with potential service interruption to prompt immediate action.</li>
        </ol>
      `
    },
    {
      type: "email",
      sender: "Apple Support",
      senderEmail: "support@apple-security.com",
      subject: "Your Apple ID Has Been Locked",
      date: "Oct 19, 2023, 9:00 AM",
      body: `Dear Customer,
  
  Your Apple ID has been locked due to multiple failed login attempts. Please verify your account to restore access.
  
  Verify your account: http://apple-security.com/verify
  
  Best regards,
  Apple Support`,
      links: [
        { text: "Verify your account", url: "http://apple-security.com/verify" }
      ],
      isPhishing: true,
      explanation: `
        <b>This is a phishing email:</b>
        <ol>
          <li><b>Sender Email:</b> "support@apple-security.com" is not a legitimate Apple email. Official emails come from "@apple.com".</li>
          <li><b>Account Lock Threat:</b> Claims your account is locked to create urgency.</li>
          <li><b>Phishing Link:</b> The link "apple-security.com" is a fake domain not associated with Apple.</li>
        </ol>
      `
    },
    {
      type: "email",
      sender: "Bank of America Alerts",
      senderEmail: "alerts@bofa-secure.com",
      subject: "Unusual Activity Detected in Your Account",
      date: "Nov 5, 2023, 8:20 AM",
      body: `Dear Customer,
  
  We have detected unusual activity on your Bank of America account. To ensure your account is secure, please confirm your identity by following the link below.
  
  Confirm your identity: http://bofa-secure.com/login
  
  Thank you,
  Bank of America Security`,
      links: [
        { text: "Confirm your identity", url: "http://bofa-secure.com/login" }
      ],
      isPhishing: true,
      explanation: `
        <b>This email is a phishing attempt. Key signs:</b>
        <ol>
          <li><b>Sender Email:</b> "alerts@bofa-secure.com" is not a legitimate Bank of America email; official emails end with "@bankofamerica.com".</li>
          <li><b>Urgent Call to Action:</b> Urges you to confirm your identity immediately.</li>
          <li><b>Misleading URL:</b> The link "bofa-secure.com" is deceptive and not affiliated with the bank.</li>
        </ol>
      `
    },
  
    // Legitimate Emails
    {
      type: "email",
      sender: "Amazon Prime",
      senderEmail: "prime@amazon.com",
      subject: "Reminder: Your Prime Membership Renewal",
      date: "Nov 7, 2023, 9:15 AM",
      body: `Hello,
  
  We wanted to remind you that your Amazon Prime membership will renew on Nov 10, 2023. No further action is required.
  
  Thank you for being a Prime member!
  
  Best,
  Amazon Prime Team`,
      links: [],
      isPhishing: false,
      explanation: `
        <b>This is a legitimate email from Amazon. Reasons:</b>
        <ol>
          <li><b>Sender Email:</b> The email is from "prime@amazon.com", a legitimate Amazon domain.</li>
          <li><b>No Urgent Action Required:</b> There’s no request for personal information or urgent action.</li>
          <li><b>Lack of Suspicious Links:</b> There are no links prompting you to take immediate action.</li>
        </ol>
      `
    },
    {
      type: "email",
      sender: "LinkedIn",
      senderEmail: "notifications@linkedin.com",
      subject: "You Have New Connection Requests",
      date: "Oct 28, 2023, 1:00 PM",
      body: `Hi [Your Name],
  
  You have 3 new connection requests waiting for you on LinkedIn. Click below to view your pending invitations.
  
  View your connections
  
  Thank you,
  The LinkedIn Team`,
      links: [
        { text: "View your connections", url: "https://www.linkedin.com" }
      ],
      isPhishing: false,
      explanation: `
        <b>This is a legitimate email from LinkedIn:</b>
        <ol>
          <li><b>Sender Email:</b> "notifications@linkedin.com" is a verified LinkedIn email.</li>
          <li><b>Safe Link:</b> The link leads to "linkedin.com", the official website.</li>
          <li><b>No Urgent Language:</b> The email doesn't pressure you into immediate action.</li>
        </ol>
      `
    },
    {
      type: "email",
      sender: "Spotify",
      senderEmail: "support@spotify.com",
      subject: "Your Monthly Receipt from Spotify",
      date: "Nov 3, 2023, 11:20 AM",
      body: `Hello,
  
  Thank you for being a Spotify Premium member! Here is your monthly receipt for your subscription.
  
  Best,
  Spotify Support`,
      links: [],
      isPhishing: false,
      explanation: `
        <b>This is a legitimate email from Spotify:</b>
        <ol>
          <li><b>Sender Email:</b> "support@spotify.com" is a verified Spotify email.</li>
          <li><b>Informative Content:</b> The email provides a receipt without requesting action.</li>
          <li><b>No Suspicious Links:</b> There are no links requesting sensitive information.</li>
        </ol>
      `
    },
    {
      type: "email",
      sender: "Microsoft Account Team",
      senderEmail: "account-security-noreply@account.microsoft.com",
      subject: "Security Alert: New Sign-In from Windows",
      date: "Oct 25, 2023, 7:40 PM",
      body: `Hi [Your Name],
  
  We detected a sign-in to your Microsoft account from a new Windows device. If this was you, no further action is required.
  
  Thank you,
  Microsoft Account Team`,
      links: [],
      isPhishing: false,
      explanation: `
        <b>This is a legitimate email from Microsoft:</b>
        <ol>
          <li><b>Sender Email:</b> "account-security-noreply@account.microsoft.com" is a legitimate Microsoft domain.</li>
          <li><b>Informative Tone:</b> The email is informative and doesn't demand urgent action.</li>
          <li><b>No Suspicious Links:</b> There are no links prompting immediate action.</li>
        </ol>
      `
    },
    {
      type: "email",
      sender: "Google Photos",
      senderEmail: "no-reply@photos.google.com",
      subject: "Your Photo Backup Completed Successfully",
      date: "Oct 30, 2023, 8:15 PM",
      body: `Hello,
  
  Your photos have been successfully backed up to Google Photos. You can now access them anytime from any device.
  
  Best regards,
  The Google Photos Team`,
      links: [],
      isPhishing: false,
      explanation: `
        <b>This is a legitimate email from Google Photos:</b>
        <ol>
          <li><b>Sender Email:</b> "no-reply@photos.google.com" is a legitimate Google domain.</li>
          <li><b>Informative Content:</b> The email informs you about a completed backup.</li>
          <li><b>No Action Required:</b> There's no request for personal information or immediate action.</li>
        </ol>
      `
    }
  ];
  
  export default phishingData;
  