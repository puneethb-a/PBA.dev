import { useReveal } from '../hooks/useReveal'
import styles from './Certifications.module.css'

const certs = [
  {
    icon: '☕',
    title: 'Java Full Stack Development',
    issuer: 'KodNest Technologies',
    year: '2025',
    color: 'purple',
  },
  {
    icon: '⚛️',
    title: 'React.js — Frontend Development',
    issuer: 'Self-Learning / Projects',
    year: '2024',
    color: 'green',
  },
  {
    icon: '🤖',
    title: 'AI Agents & LLM Development',
    issuer: 'Self-Learning / Projects',
    year: '2025',
    color: 'pink',
  },
  {
    icon: '🐳',
    title: 'Docker & Containerization',
    issuer: 'Self-Learning',
    year: '2024',
    color: 'gray',
  },
]

export default function Certifications() {
  return (
    <section className={styles.section} id="certifications">
      <div className={styles.label}>What I've earned</div>
      <h2 className={styles.title}>
        Certifications &amp; <span className={styles.accent}>Achievements</span>
      </h2>
      <div className={styles.grid}>
        {certs.map((c, i) => <CertCard key={i} {...c} delay={i * 80} />)}
      </div>
    </section>
  )
}

function CertCard({ icon, title, issuer, year, color, delay }) {
  const ref = useReveal()
  return (
    <div className={`${styles.card} ${styles[color]} reveal`} ref={ref} style={{ transitionDelay: `${delay}ms` }}>
      <div className={styles.cardTop}>
        <span className={styles.icon}>{icon}</span>
        <span className={styles.year}>{year}</span>
      </div>
      <div className={styles.cardTitle}>{title}</div>
      <div className={styles.issuer}>{issuer}</div>
      <div className={styles.badge}>Completed</div>
    </div>
  )
}
