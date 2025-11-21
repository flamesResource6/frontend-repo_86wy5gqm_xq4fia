import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'
import FAQ from './components/FAQ'
import Policies from './components/Policies'

function App() {
  const [theme, setTheme] = useState('dark')

  // pointer-follow effect: shadow in light, glow in dark
  useEffect(() => {
    const root = document.documentElement
    const onMove = (e) => {
      root.style.setProperty('--x', e.clientX + 'px')
      root.style.setProperty('--y', e.clientY + 'px')
    }
    window.addEventListener('pointermove', onMove)
    return () => window.removeEventListener('pointermove', onMove)
  }, [])

  function handleToggleTheme() {
    setTheme((t) => (t === 'dark' ? 'light' : 'dark'))
  }

  function handleQuickContact() {
    document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' })
  }

  function handleCopyEmail() {
    navigator.clipboard.writeText('contato@binaryweb.studio')
  }

  return (
    <div className={theme === 'dark' ? 'bg-black text-white' : 'bg-zinc-50 text-zinc-900'}>
      {/* global pointer glow/shadow overlay */}
      <div className={
        'pointer-events-none fixed inset-0 z-10 transition-opacity duration-300 ' +
        (theme === 'dark' ? 'bg-[radial-gradient(500px_300px_at_var(--x,50%)_var(--y,50%),rgba(255,255,255,0.08),transparent_60%)] mix-blend-screen' : 'bg-[radial-gradient(500px_300px_at_var(--x,50%)_var(--y,50%),rgba(0,0,0,0.15),transparent_60%)]')
      } />

      <Navbar onToggleTheme={handleToggleTheme} theme={theme} onQuickContact={handleQuickContact} onCopyEmail={handleCopyEmail} />
      <main className="relative">
        <Hero onPrimaryCTA={handleQuickContact} />
        <Services />
        <Projects />
        <About />
        <Contact />
        <FAQ />
        <Policies />
        <footer className="border-t border-white/10 py-10">
          <div className="mx-auto max-w-7xl px-4 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-zinc-400">© {new Date().getFullYear()} Binary Web Studio. Todos os direitos reservados.</p>
            <a href="#politicas" className="text-sm text-white/80 hover:text-white">Termos e Privacidade</a>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
