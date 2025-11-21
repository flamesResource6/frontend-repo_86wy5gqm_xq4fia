import SectionGrid from './SectionGrid'

const projects = [
  { name: 'Cafeteria Aroma', tag: 'Landing Page', img: 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=1200&auto=format&fit=crop' },
  { name: 'Clínica Vida', tag: 'Site Institucional', img: 'https://images.unsplash.com/photo-1516549655169-df83a077451f?q=80&w=1200&auto=format&fit=crop' },
  { name: 'FitPro', tag: 'E-commerce', img: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=1200&auto=format&fit=crop' },
]

export default function Projects() {
  return (
    <SectionGrid id="projetos" title="Projetos em destaque" subtitle="Alguns exemplos do que podemos construir para o seu negócio">
      <div className="grid md:grid-cols-3 gap-4">
        {projects.map((p) => (
          <div key={p.name} className="group rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md">
            <div className="aspect-video overflow-hidden">
              <img src={p.img} alt={p.name} className="h-full w-full object-cover group-hover:scale-105 transition-transform" />
            </div>
            <div className="p-4 flex items-center justify-between">
              <div>
                <div className="text-white font-medium">{p.name}</div>
                <div className="text-xs text-zinc-400">{p.tag}</div>
              </div>
              <a href="#contato" className="text-sm text-white/80 hover:text-white underline underline-offset-4">Quero algo assim</a>
            </div>
          </div>
        ))}
      </div>
    </SectionGrid>
  )
}
