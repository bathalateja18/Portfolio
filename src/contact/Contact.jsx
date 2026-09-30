import React, { useState } from 'react';
import styles from '../contact/contact.module.css'
export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState({ type: '', text: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResponseMessage({ type: '', text: '' });

    const formData = new FormData(e.target);

    // Reads access key from environment variable or direct fallback
    const accessKey = import.meta.env.VITE_WEB3FORMS_KEY || "7aecda41-d931-4568-bcb4-6c7aaaa31111"
    formData.append("access_key", accessKey);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResponseMessage({
          type: 'success',
          text: 'Thank you! Your message has been sent successfully.',
        });
        e.target.reset();
      } else {
        setResponseMessage({
          type: 'error',
          text: data.message || 'Something went wrong. Please try again.',
        });
      }
    } catch (error) {
      setResponseMessage({
        type: 'error',
        text: 'Failed to connect. Please check your network connection.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.contactSection}>
      <h1 className={styles.titleText}>Contact Me</h1>

      <div className={styles.infoContainer}>
        <p className={styles.infoItem}>
          Email: <span className={styles.highlightText}>bathalateja150@gmail.com</span>
        </p>
        <p className={styles.infoItem}>
          Phone: <span className={styles.highlightText}>+91 8179033673</span>
        </p>
      </div>

      <div className={styles.formCard}>
        <form onSubmit={handleSubmit} className={styles.formGrid}>
          {/* Anti-spam botcheck field */}
          <input type="checkbox" name="botcheck" style={{ display: 'none' }} />

          <input
            type="text"
            name="name"
            aria-label="Your Name"
            required
            placeholder="Your Name"
            className={`${styles.inputField} ${styles.nameArea}`}
          />

          <input
            type="email"
            name="email"
            aria-label="Your Email"
            required
            placeholder="Your Email"
            className={`${styles.inputField} ${styles.emailArea}`}
          />

          <textarea
            name="message"
            aria-label="Your Message"
            required
            rows="5"
            placeholder="Your Message"
            className={`${styles.inputField} ${styles.textareaField} ${styles.messageArea}`}
          ></textarea>

          <div className={styles.buttonArea}>
            <button type="submit" disabled={isSubmitting} className={styles.submitButton}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </div>
        </form>

        {responseMessage.text && (
          <div className={styles.statusMessage}>
            <p className={responseMessage.type === 'success' ? styles.success : styles.error}>
              {responseMessage.text}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}