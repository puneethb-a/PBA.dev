import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'
import styles from './Contact.module.css'
import emailjs from '@emailjs/browser'


const TO = 'puneethh.ba@gmail.com'

export default function Contact() {
  const refText = useReveal()
  const refLinks = useReveal()

  const [open, setOpen] = useState(false)
  const [form, setForm] = useState({ subject: '', message: '' })
  const [sent, setSent] = useState(false)

  function handleEmailClick(e) {
    e.preventDefault()
    setOpen(prev => !prev)
    setSent(false)
  }

  function handleChange(e) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  function handleSend() {
  if (!form.subject.trim() || !form.message.trim()) return

  emailjs.send(
    'service_bpi0mtm',     // from Step 2
    'template_jq3xqpy',    // from Step 3
    {
      name: "clint user",
      subject: form.subject,
      message: form.message,
      to_email: 'puneethh.ba@gmail.com',
    },
    'xSlZruN7IRi6HoFz4'      // from Step 4
  ).then(() => {
    setSent(true)
    setTimeout(() => {
      setSent(false)
      setOpen(false)
      setForm({ subject: '', message: '' })
    }, 2500)
  })
}

  function handleClose() {
    setOpen(false)
    setForm({ subject: '', message: '' })
    setSent(false)
  }

  return (
    <section className={styles.section} id="contact">
      <div className={styles.label}>Get in touch</div>
      <div className={styles.inner}>

        <div className={`${styles.text} reveal`} ref={refText}>
          <div className={styles.big}>
            Let's build something<br />
            <span className={styles.accent}>great together.</span>
          </div>
          <p className={styles.sub}>
            Open to full-time roles, internships, and freelance projects. Reach out via email or LinkedIn.
          </p>
        </div>

        <div className={`${styles.linksCol} reveal`} ref={refLinks}>

          {/* EMAIL */}
          <div className={styles.emailWrapper}>
            <button
              className={`${styles.link} ${open ? styles.linkActive : ''}`}
              onClick={handleEmailClick}
              aria-expanded={open}
            >
              <div className={styles.icon}>✉</div>
              <div className={styles.linkText}>
                <span className={styles.linkLabel}>Email — click to compose</span>
                <span className={styles.linkValue}>{TO}</span>
              </div>
              <span className={`${styles.chevron} ${open ? styles.chevronOpen : ''}`}>›</span>
            </button>

            <div className={`${styles.composer} ${open ? styles.composerOpen : ''}`}>
              <div className={styles.composerInner}>
                {sent ? (
                  <div className={styles.sentMsg}>
                    <span className={styles.sentIcon}>✓</span>
                    Opening your mail client…
                  </div>
                ) : (
                  <>
                    <div className={styles.composerTo}>
                      <span className={styles.composerToLabel}>To:</span>
                      <span className={styles.composerToValue}>{TO}</span>
                    </div>
                    <input
                      className={styles.composerInput}
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      value={form.subject}
                      onChange={handleChange}
                      autoComplete="off"
                    />
                    <textarea
                      className={styles.composerTextarea}
                      name="message"
                      placeholder="Write your message…"
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                    />
                    <div className={styles.composerActions}>
                      <button className={styles.btnClose} onClick={handleClose}>Cancel</button>
                      <button
                        className={styles.btnSend}
                        onClick={handleSend}
                        disabled={!form.subject.trim() || !form.message.trim()}
                      >
                        Send ↗
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* PHONE */}
          <a href="tel:8073738352" className={styles.link}>
            <div className={styles.icon}>☎</div>
            <div className={styles.linkText}>
              <span className={styles.linkLabel}>Phone</span>
              <span className={styles.linkValue}>+91 80737 38352</span>
            </div>
          </a>

          {/* LINKEDIN */}
          <a
            href="https://www.linkedin.com/in/puneethbaa/"
            className={styles.link}
            target="_blank"
            rel="noreferrer"
          >
            <div className={styles.icon}>in</div>
            <div className={styles.linkText}>
              <span className={styles.linkLabel}>LinkedIn</span>
              <span className={styles.linkValue}>linkedin.com/in/puneethbaa</span>
            </div>
          </a>

        </div>
      </div>
    </section>
  )
}
