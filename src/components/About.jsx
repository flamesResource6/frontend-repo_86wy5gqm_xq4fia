import SectionGrid from './SectionGrid'

export default function About() {
  return (
    <SectionGrid id="sobre" title="Sobre a Binary Web Studio" subtitle="Somos uma micro-agência focada em sites rápidos, bonitos e que vendem">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
          <h3 className="text-white font-medium mb-2">Nossa missão</h3>
          <p className="text-zinc-300">Ajudar pequenos negócios a vender mais e fortalecer sua marca através de presença digital estratégica, com foco em performance, SEO e conversão.</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
          <h3 className="text-white font-medium mb-2">Como trabalhamos</h3>
          <p className="text-zinc-300">Processo ágil, comunicação transparente e entregas pontuais. Do briefing ao lançamento, cuidamos de tudo para você focar no seu negócio.</p>
        </div>
      </div>
    </SectionGrid>
  )
}
