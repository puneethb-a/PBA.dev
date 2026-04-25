import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.left}>
        <span className={styles.logo}>PBA</span>
        <span className={styles.copy}>© 2025 Puneeth B.A — Bengaluru, India</span>
      </div>
      <div className={styles.socials}>
        <a href="https://www.linkedin.com/in/puneethbaa/" target="_blank" rel="noreferrer" className={styles.social}>
          LinkedIn ↗
        </a>
        <a href="https://github.com/puneethb-a" target="_blank" rel="noreferrer" className={styles.social}>
          GitHub ↗
        </a>
        <a href="mailto:puneethh.ba@gmail.com" className={styles.social}>
          Email ↗
        </a>
      </div>
    </footer>
  )
}
