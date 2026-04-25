import { useReveal } from '../hooks/useReveal'
import styles from './Projects.module.css'

const projects = [
  {
    num: '01',
    name: 'E-Commerce Web Application',
    desc: 'Full-stack e-commerce platform with JWT authentication, role-based access control, and RESTful APIs for product CRUD and cart management. Built with a scalable layered backend architecture and optimized entity relationships.',
    stack: [
      { label: 'React.js', color: 'green' },
      { label: 'Spring Boot', color: 'pink' },
      { label: 'MySQL', color: 'purple' },
      { label: 'JWT Auth', color: 'purple' },
      { label: 'REST APIs', color: 'gray' },
      { label: 'Git/GitHub', color: 'gray' },
    ],
    github: 'https://github.com/puneethb-a',
    demo: null,
  },
  {
    num: '02',
    name: 'Research Agent using LLMs',
    desc: 'AI-powered research automation agent using LangChain, CrewAI and DeepSeek R1. Automates large-scale data collection, analysis and summarization with real-time APIs for accurate information retrieval.',
    stack: [
      { label: 'Python', color: 'green' },
      { label: 'LangChain', color: 'green' },
      { label: 'CrewAI', color: 'green' },
      { label: 'DeepSeek R1', color: 'green' },
      { label: 'AI Agents', color: 'purple' },
    ],
    github: 'https://github.com/puneethb-a',
    demo: null,
  },
  {
    num: '03',
    name: 'Pet Shop Application',
    desc: 'Full-stack pet shop management system for handling users, products and orders. Features secure authentication, dynamic product management, seamless frontend–backend integration, and efficient database operations.',
    stack: [
      { label: 'HTML/CSS', color: 'green' },
      { label: 'JavaScript', color: 'green' },
      { label: 'Java', color: 'pink' },
      { label: 'MySQL', color: 'purple' },
      { label: 'Auth System', color: 'gray' },
    ],
    github: 'https://github.com/puneethb-a',
    demo: null,
  },
]

export default function Projects() {
  return (
    <section className={styles.section} id="projects">
      <div className={styles.label}>What I've built</div>
      <h2 className={styles.title}>
        Featured <span className={styles.accent}>Projects</span>
      </h2>
      <div className={styles.list}>
        {projects.map((p, i) => (
          <ProjectCard key={i} {...p} />
        ))}
      </div>
    </section>
  )
}

function ProjectCard({ num, name, desc, stack, github, demo }) {
  const ref = useReveal()
  return (
    <div className={`${styles.card} reveal`} ref={ref}>
      <div className={styles.num}>{num}</div>
      <div className={styles.body}>
        <div className={styles.name}>{name}</div>
        <p className={styles.desc}>{desc}</p>
        <div className={styles.footer}>
          <div className={styles.stack}>
            {stack.map((t, i) => (
              <span key={i} className={`${styles.tag} ${styles[t.color]}`}>{t.label}</span>
            ))}
          </div>
          <div className={styles.links}>
            {github && (
              <a href={github} target="_blank" rel="noreferrer" className={styles.linkBtn}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"/>
                </svg>
                GitHub
              </a>
            )}
            {demo && (
              <a href={demo} target="_blank" rel="noreferrer" className={`${styles.linkBtn} ${styles.linkBtnDemo}`}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                  <polyline points="15 3 21 3 21 9"/>
                  <line x1="10" y1="14" x2="21" y2="3"/>
                </svg>
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
