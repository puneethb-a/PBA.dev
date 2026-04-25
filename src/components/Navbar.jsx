import { useState, useRef, useEffect } from 'react'
import { useTheme, themes } from '../context/ThemeContext'
import styles from './Navbar.module.css'

const NAV_LINKS = ['skills', 'projects', 'experience', 'certifications', 'education', 'contact']

function useActiveSection() {
  const [active, setActive] = useState('')
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id) })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    NAV_LINKS.forEach(id => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])
  return active
}

export default function Navbar() {
  const { themeName, setThemeName, isDark, setIsDark } = useTheme()
  const [pickerOpen, setPickerOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pickerRef = useRef(null)
  const active = useActiveSection()

  // Close picker on outside click
  useEffect(() => {
    function handle(e) {
      if (pickerRef.current && !pickerRef.current.contains(e.target)) setPickerOpen(false)
    }
    document.addEventListener('mousedown', handle)
    return () => document.removeEventListener('mousedown', handle)
  }, [])

  // Close mobile menu on resize
  useEffect(() => {
    function onResize() { if (window.innerWidth > 860) setMenuOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const current = themes[themeName]

  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.logo}>PBA</div>

        {/* Desktop links */}
        <ul className={styles.links}>
          {NAV_LINKS.map(s => (
            <li key={s}>
              <a
                href={`#${s}`}
                className={active === s ? styles.linkActive : ''}
              >{s}</a>
            </li>
          ))}
        </ul>

        <div className={styles.controls}>
          {/* Dark/Light */}
          <button
            className={styles.modeToggle}
            onClick={() => setIsDark(d => !d)}
            aria-label="Toggle dark mode"
            title={isDark ? 'Switch to Light' : 'Switch to Dark'}
          >
            <span className={styles.modeIcon}>{isDark ? '☀️' : '🌙'}</span>
            <span className={styles.modeLabel}>{isDark ? 'Light' : 'Dark'}</span>
          </button>

          {/* Theme picker */}
          <div className={styles.pickerWrap} ref={pickerRef}>
            <button
              className={`${styles.themeBtn} ${pickerOpen ? styles.themeBtnActive : ''}`}
              onClick={() => setPickerOpen(o => !o)}
              aria-label="Open theme picker"
            >
              <span>{current.emoji}</span>
              <span className={styles.themeBtnLabel}>{current.name}</span>
              <span className={`${styles.pickerArrow} ${pickerOpen ? styles.pickerArrowOpen : ''}`}>▾</span>
            </button>

            {pickerOpen && (
              <div className={styles.picker}>
                <div className={styles.pickerTitle}>Choose Theme</div>
                <div className={styles.pickerGrid}>
                  {Object.entries(themes).map(([key, theme]) => (
                    <button
                      key={key}
                      className={`${styles.pickerItem} ${themeName === key ? styles.pickerItemActive : ''}`}
                      onClick={() => { setThemeName(key); setPickerOpen(false) }}
                    >
                      <span className={styles.pickerEmoji}>{theme.emoji}</span>
                      <span className={styles.pickerName}>{theme.name}</span>
                      <div className={styles.pickerDots}>
                        <span style={{ background: theme[isDark ? 'dark' : 'light']['--accent'] }} />
                        <span style={{ background: theme[isDark ? 'dark' : 'light']['--accent2'] }} />
                        <span style={{ background: theme[isDark ? 'dark' : 'light']['--accent3'] }} />
                      </div>
                      {themeName === key && <span className={styles.pickerCheck}>✓</span>}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Hamburger */}
          <button
            className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ''}`}
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div className={`${styles.drawer} ${menuOpen ? styles.drawerOpen : ''}`}>
        <div className={styles.drawerInner}>
          <ul className={styles.drawerLinks}>
            {NAV_LINKS.map(s => (
              <li key={s}>
                <a
                  href={`#${s}`}
                  className={active === s ? styles.drawerLinkActive : ''}
                  onClick={() => setMenuOpen(false)}
                >
                  <span className={styles.drawerNum}>0{NAV_LINKS.indexOf(s) + 1}</span>
                  {s}
                </a>
              </li>
            ))}
          </ul>
          <div className={styles.drawerFooter}>
            <span>puneethh.ba@gmail.com</span>
            <span>Bengaluru, India</span>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div className={styles.overlay} onClick={() => setMenuOpen(false)} />
      )}
    </>
  )
}
