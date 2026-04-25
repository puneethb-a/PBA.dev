import { useState, useEffect } from 'react'
import styles from './Hero.module.css'

const TYPING_WORDS = [
  'Full-Stack Developer',
  'Java Engineer',
  'React.js Builder',
  'AI Agent Creator',
  'Spring Boot Dev',
]

function useTyping(words, typingSpeed = 80, deletingSpeed = 40, pauseMs = 1800) {
  const [display, setDisplay] = useState('')
  const [wordIdx, setWordIdx] = useState(0)
  const [phase, setPhase] = useState('typing') // typing | pausing | deleting

  useEffect(() => {
    const word = words[wordIdx]
    let timeout

    if (phase === 'typing') {
      if (display.length < word.length) {
        timeout = setTimeout(() => setDisplay(word.slice(0, display.length + 1)), typingSpeed)
      } else {
        timeout = setTimeout(() => setPhase('pausing'), pauseMs)
      }
    } else if (phase === 'pausing') {
      setPhase('deleting')
    } else if (phase === 'deleting') {
      if (display.length > 0) {
        timeout = setTimeout(() => setDisplay(display.slice(0, -1)), deletingSpeed)
      } else {
        setWordIdx(i => (i + 1) % words.length)
        setPhase('typing')
      }
    }

    return () => clearTimeout(timeout)
  }, [display, phase, wordIdx, words, typingSpeed, deletingSpeed, pauseMs])

  return display
}

export default function Hero() {
  const typed = useTyping(TYPING_WORDS)

  return (
    <section className={styles.hero} id="home">
      <div className={styles.bg}>
        <div className={`${styles.orb} ${styles.orb1}`} />
        <div className={`${styles.orb} ${styles.orb2}`} />
        <div className={`${styles.orb} ${styles.orb3}`} />
      </div>

      <div className={styles.content}>
        <div className={styles.tag}>
          <span className={styles.dot} />
          Available for opportunities
        </div>

        <h1 className={styles.name}>
          <span className={styles.nameAccent}>Puneeth</span> B.A
          <span className={styles.nameLine2}>
            {typed}<span className={styles.cursor}>|</span>
          </span>
        </h1>

        <p className={styles.desc}>
          Aspiring software developer with expertise in{' '}
          <span className={styles.highlight}>Java · Spring Boot · React.js</span>{' '}
          — crafting scalable, user-focused web applications that solve real problems.
        </p>

        <div className={styles.actions}>
          <a href="#projects" className={styles.btnPrimary}>View Projects</a>
          <a href="#contact" className={styles.btnOutline}>Get in Touch</a>
          <a
            href="/Puneeth_BA_Resume.pdf"
            download
            className={styles.btnDownload}
            title="Download Resume"
          >
            ↓ Resume
          </a>
        </div>
      </div>

      <div className={styles.scrollHint}>
        <div className={styles.scrollLine} />
        <span>scroll</span>
      </div>
    </section>
  )
}
