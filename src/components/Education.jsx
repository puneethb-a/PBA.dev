import { useReveal } from '../hooks/useReveal'
import styles from './Education.module.css'

const edu = [
  {
    degree: 'B.E — Computer Science & Engineering',
    school: 'PA College of Engineering, Mangalore',
    period: 'Dec 2021 – June 2025',
    score: 'CGPA: 6.7',
  },
  {
    degree: 'PUC — PCMC',
    school: 'Government PU College, Mangalore',
    period: 'Jun 2019 – May 2021',
    score: '76.66%',
  },
  {
    degree: 'SSLC',
    school: 'Government High School, Panja',
    period: 'Jun 2015 – May 2019',
    score: '80.32%',
  },
]

export default function Education() {
  return (
    <section className={styles.section} id="education">
      <div className={styles.label}>My background</div>
      <h2 className={styles.title}>Education</h2>
      <div className={styles.grid}>
        {edu.map((e, i) => (
          <EduCard key={i} {...e} />
        ))}
      </div>
    </section>
  )
}

function EduCard({ degree, school, period, score }) {
  const ref = useReveal()
  return (
    <div className={`${styles.card} reveal`} ref={ref}>
      <div className={styles.degree}>{degree}</div>
      <div className={styles.school}>{school}</div>
      <div className={styles.meta}>
        <span>{period}</span>
        <span className={styles.score}>{score}</span>
      </div>
    </div>
  )
}
