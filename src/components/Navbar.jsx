import { useEffect, useState } from 'react'
import { Moon, Sun, Menu, X, Copy, Phone, Github, Linkedin } from 'lucide-react'

export default function Navbar({ onToggleTheme, theme, onQuickContact, onCopyEmail }) {
  const [open, setOpen] = useState(false)

  // Close on escape
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const NavLink = ({ href, children }) => (
    <a href={href} className="text-sm md:text-[15px] text-zinc-300 hover:text-white transition-colors" onClick={() => setOpen(false)}>
      {children}
    </a>
  )

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 py-4">
        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/30 backdrop-blur-md px-4 py-3">
          <a href="#home" className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-white to-zinc-400 shadow-lg" />
            <span className="font-semibold text-white">Binary Web Studio</span>
          </a>

          <nav className="hidden md:flex items-center gap-6">
            <NavLink href="#servicos">Serviços</NavLink>
            <NavLink href="#projetos">Projetos</NavLink>
            <NavLink href="#sobre">Sobre</NavLink>
            <NavLink href="#contato">Contato</NavLink>
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <button aria-label="Contato rápido" className="inline-flex items-center gap-2 rounded-xl bg-white text-black px-3 py-2 text-sm hover:shadow-[0_0_30px_rgba(255,255,255,0.25)] transition-shadow" onClick={onQuickContact}>
              <Phone size={16} /> Fale conosco
            </button>
            <button aria-label="Copiar e-mail" className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-3 py-2 text-sm text-white hover:bg-white/10" onClick={onCopyEmail}>
              <Copy size={16} /> Copiar e-mail
            </button>
            <button aria-label="Alternar tema" className="p-2 rounded-xl border border-white/20 text-white hover:bg-white/10" onClick={onToggleTheme}>
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <a aria-label="GitHub" href="#" className="p-2 rounded-xl border border-white/20 text-white hover:bg-white/10"><Github size={18} /></a>
            <a aria-label="LinkedIn" href="#" className="p-2 rounded-xl border border-white/20 text-white hover:bg-white/10"><Linkedin size={18} /></a>
          </div>

          <button className="md:hidden p-2 text-white" aria-label="Abrir menu" onClick={() => setOpen(true)}>
            <Menu />
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden fixed inset-0 z-50 bg-black/60 backdrop-blur-sm" onClick={() => setOpen(false)}>
          <div className="absolute top-3 right-4">
            <button aria-label="Fechar menu" className="p-2 rounded-xl border border-white/20 text-white hover:bg-white/10" onClick={() => setOpen(false)}>
              <X />
            </button>
          </div>
          <div className="mt-20 mx-4 rounded-2xl border border-white/10 bg-zinc-900/90 p-6 space-y-4" onClick={(e) => e.stopPropagation()}>
            <a href="#servicos" className="block text-white text-lg" onClick={() => setOpen(false)}>Serviços</a>
            <a href="#projetos" className="block text-white text-lg" onClick={() => setOpen(false)}>Projetos</a>
            <a href="#sobre" className="block text-white text-lg" onClick={() => setOpen(false)}>Sobre</a>
            <a href="#contato" className="block text-white text-lg" onClick={() => setOpen(false)}>Contato</a>
            <div className="flex items-center gap-2 pt-4">
              <button className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-white text-black px-3 py-2" onClick={onQuickContact}><Phone size={16}/> Fale conosco</button>
              <button className="p-2 rounded-xl border border-white/20 text-white hover:bg-white/10" onClick={onCopyEmail}><Copy size={16}/></button>
              <button className="p-2 rounded-xl border border-white/20 text-white hover:bg-white/10" onClick={onToggleTheme}>{theme === 'dark' ? <Sun size={18}/> : <Moon size={18}/>}</button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
