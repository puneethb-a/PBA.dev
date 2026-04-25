import { useEffect, useRef } from 'react'
import styles from './CursorSpotlight.module.css'

export default function CursorSpotlight() {
  const spotRef = useRef(null)

  useEffect(() => {
    const el = spotRef.current
    if (!el) return

    let raf
    let mx = -400, my = -400

    function onMove(e) {
      mx = e.clientX
      my = e.clientY
    }

    function animate() {
      if (el) {
        el.style.left = mx + 'px'
        el.style.top  = my + 'px'
      }
      raf = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', onMove)
    raf = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return <div className={styles.spotlight} ref={spotRef} />
}
