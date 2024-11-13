// components/Email.js
import styles from '../styles/email.module.css';

export default function Email({ sender, senderEmail, subject, date, body, links }) {
  return (
    <div className={styles.emailContainer}>
      {/* Email Header */}
      <div className={styles.emailHeader}>
        <div className={styles.emailSender}>
          <span className={styles.senderName}>{sender}</span>
          <span className={styles.senderEmail}>&lt;{senderEmail}&gt;</span>
        </div>
        <div className={styles.emailSubject}>{subject}</div>
        <div className={styles.emailDate}>{date}</div>
      </div>

      {/* Email Body */}
      <div className={styles.emailBody}>
        {body}
        {/* Dynamic links in the body */}
        {links && links.map((link, index) => (
          <p key={index} className={styles.emailLink}>
            <a href={link.url} target="_blank" rel="noopener noreferrer">
              {link.text}
            </a>
          </p>
        ))}
      </div>

      {/* Email Actions */}
      <div className={styles.emailActions}>
        <button className={styles.actionButton}>Reply</button>
        <button className={styles.actionButton}>Forward</button>
      </div>
    </div>
  );
}
