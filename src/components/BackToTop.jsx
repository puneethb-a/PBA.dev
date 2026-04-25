import { useState, useEffect } from 'react'
import styles from './BackToTop.module.css'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    function onScroll() { setVisible(window.scrollY > 400) }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function scrollTop() { window.scrollTo({ top: 0, behavior: 'smooth' }) }

  return (
    <button
      className={`${styles.btn} ${visible ? styles.visible : ''}`}
      onClick={scrollTop}
      aria-label="Back to top"
      title="Back to top"
    >
      ↑
    </button>
  )
}
