import { useEffect, useRef, useState } from 'react'
import styles from './Stats.module.css'

const stats = [
  { value: 3, suffix: '+', label: 'Projects Built' },
  { value: 6, suffix: '+', label: 'Months Experience' },
  { value: 10, suffix: '+', label: 'Technologies' },
  { value: 1, suffix: '', label: 'Internship' },
]

function useCounter(target, duration = 1500, start = false) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!start) return
    let startTime = null
    function step(timestamp) {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      setCount(Math.floor(progress * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [target, duration, start])
  return count
}

function StatItem({ value, suffix, label }) {
  const ref = useRef(null)
  const [started, setStarted] = useState(false)
  const count = useCounter(value, 1200, started)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setStarted(true); observer.disconnect() } },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div className={styles.stat} ref={ref}>
      <div className={styles.value}>{count}{suffix}</div>
      <div className={styles.label}>{label}</div>
    </div>
  )
}

export default function Stats() {
  return (
    <div className={styles.wrapper}>
      {stats.map((s, i) => <StatItem key={i} {...s} />)}
    </div>
  )
}
