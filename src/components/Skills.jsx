import { useReveal } from '../hooks/useReveal'
import styles from './Skills.module.css'

const skills = [
  {
    icon: '⚡',
    cat: 'Languages',
    tags: [
      { label: 'Core Java', color: 'purple' },
      { label: 'JavaScript', color: 'purple' },
      { label: 'OOPs', color: 'purple' },
      { label: 'Python', color: 'purple' },
    ],
  },
  {
    icon: '🌐',
    cat: 'Frontend',
    tags: [
      { label: 'React.js', color: 'green' },
      { label: 'HTML5', color: 'green' },
      { label: 'CSS3', color: 'green' },
    ],
  },
  {
    icon: '🔧',
    cat: 'Backend & Frameworks',
    tags: [
      { label: 'Spring Boot', color: 'pink' },
      { label: 'Hibernate', color: 'pink' },
      { label: 'JDBC', color: 'pink' },
      { label: 'REST APIs', color: 'pink' },
    ],
  },
  {
    icon: '🛠️',
    cat: 'Tools & DevOps',
    tags: [
      { label: 'Git & GitHub', color: 'gray' },
      { label: 'Docker', color: 'gray' },
      { label: 'Maven', color: 'gray' },
      { label: 'VS Code', color: 'gray' },
      { label: 'Eclipse', color: 'gray' },
    ],
  },
  {
    icon: '🗄️',
    cat: 'Database',
    tags: [
      { label: 'MySQL', color: 'purple' },
      { label: 'SQL', color: 'purple' },
      { label: 'JDBC', color: 'purple' },
    ],
  },
  {
    icon: '🤖',
    cat: 'AI / Agents',
    tags: [
      { label: 'LangChain', color: 'green' },
      { label: 'CrewAI', color: 'green' },
      { label: 'LLMs', color: 'green' },
      { label: 'AI Agents', color: 'green' },
    ],
  },
]

export default function Skills() {
  const ref = useReveal()

  return (
    <section className={styles.section} id="skills">
      <div className={styles.label}>What I know</div>
      <h2 className={`${styles.title} reveal`} ref={ref}>
        Skills & <span className={styles.accent}>Technologies</span>
      </h2>
      <div className={styles.grid}>
        {skills.map((s, i) => (
          <SkillCard key={i} {...s} />
        ))}
      </div>
    </section>
  )
}

function SkillCard({ icon, cat, tags }) {
  const ref = useReveal()
  return (
    <div className={`${styles.card} reveal`} ref={ref}>
      <div className={styles.cardIcon}>{icon}</div>
      <div className={styles.cardCat}>{cat}</div>
      <div className={styles.tags}>
        {tags.map((t, i) => (
          <span key={i} className={`${styles.tag} ${styles[t.color]}`}>{t.label}</span>
        ))}
      </div>
    </div>
  )
}
