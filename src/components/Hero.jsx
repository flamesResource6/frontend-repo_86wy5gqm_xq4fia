import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero({ onPrimaryCTA }) {
  return (
    <section id="home" className="relative min-h-[90vh] pt-28 overflow-hidden">
      {/* Pointer trail glow/shadow handled by parent overlay */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(1200px_600px_at_var(--x,50%)_var(--y,50%),rgba(255,255,255,0.08),transparent_60%)] mix-blend-soft-light" />

      <div className="absolute inset-0 opacity-70">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* gradient to fade grid later sections */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-black pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4">
        <div className="max-w-2xl py-24">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-4xl md:text-6xl font-semibold tracking-tight text-white">
            Sites que impulsionam seu negócio
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.6 }} className="mt-4 text-lg md:text-xl text-zinc-300">
            A Binary Web Studio cria experiências digitais modernas, rápidas e focadas em conversão para pequenos negócios.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }} className="mt-8 flex flex-wrap items-center gap-3">
            <button onClick={onPrimaryCTA} className="rounded-2xl bg-white text-black px-5 py-3 font-medium hover:shadow-[0_0_30px_rgba(255,255,255,0.35)] transition-all">
              Solicitar orçamento
            </button>
            <a href="#projetos" className="rounded-2xl border border-white/20 px-5 py-3 text-white hover:bg-white/10">Ver projetos</a>
          </motion.div>
          <div className="mt-6 text-xs text-zinc-400">Resposta rápida • Orçamento sem compromisso</div>
        </div>
      </div>
    </section>
  )
}
