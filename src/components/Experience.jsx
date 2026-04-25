import { useReveal } from '../hooks/useReveal'
import styles from './Experience.module.css'

const points = [
  'Developed full-stack web application features using Java, Spring Boot, React.js, and MySQL during an intensive training program.',
  'Handled complete API integration and frontend–backend connectivity for real-world application modules.',
  'Performed systematic debugging and performance improvements across the application stack.',
]

export default function Experience() {
  const ref = useReveal()
  return (
    <section className={styles.section} id="experience">
      <div className={styles.label}>Where I've worked</div>
      <h2 className={styles.title}>
        Work <span className={styles.accent}>Experience</span>
      </h2>
      <div className={`${styles.card} reveal`} ref={ref}>
        <div className={styles.header}>
          <div>
            <div className={styles.role}>Java Full Stack Intern</div>
            <div className={styles.company}>KodNest Technologies, Bangalore</div>
          </div>
          <div className={styles.badge}>2025</div>
        </div>
        <ul className={styles.points}>
          {points.map((p, i) => (
            <li key={i}>{p}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}
