import { Wrench, Rocket, ShieldCheck, Smartphone } from 'lucide-react'
import SectionGrid from './SectionGrid'

const items = [
  { icon: Rocket, title: 'Sites modernos', desc: 'Performance, SEO e design focado em conversão.' },
  { icon: Smartphone, title: 'Responsivo total', desc: 'Perfeito em mobile, tablet e desktop.' },
  { icon: ShieldCheck, title: 'Segurança e confiabilidade', desc: 'Boas práticas, SSL e monitoramento.' },
  { icon: Wrench, title: 'Suporte contínuo', desc: 'Planos de manutenção e evolução.' },
]

export default function Services() {
  return (
    <SectionGrid id="servicos" title="Nossos serviços" subtitle="Tudo que você precisa para ter presença digital forte e profissional">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {items.map((i) => (
          <div key={i.title} className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-5 hover:bg-white/10 transition-colors">
            <i.icon className="text-white/80" />
            <div className="mt-3 font-medium text-white">{i.title}</div>
            <div className="text-sm text-zinc-400">{i.desc}</div>
          </div>
        ))}
      </div>
    </SectionGrid>
  )
}
