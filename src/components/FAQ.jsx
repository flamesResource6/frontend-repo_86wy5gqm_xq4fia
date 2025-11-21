import SectionGrid from './SectionGrid'

const faqs = [
  {
    q: 'Quanto tempo leva para entregar um site?',
    a: 'Projetos simples levam de 7 a 15 dias. Projetos maiores podem variar conforme escopo.'
  },
  {
    q: 'Vocês cuidam de domínio e hospedagem?',
    a: 'Sim. Ajudamos a registrar domínio, configurar e manter a hospedagem.'
  },
  {
    q: 'Meu site será otimizado para SEO?',
    a: 'Sim. Aplicamos boas práticas de SEO técnico e conteúdo voltado para conversão.'
  },
  {
    q: 'Como funciona o pagamento?',
    a: 'Trabalhamos com 50% no início e 50% na entrega. Aceitamos Pix e cartão.'
  }
]

export default function FAQ() {
  return (
    <SectionGrid id="faq" title="Dúvidas frequentes" subtitle="Tudo que você precisa saber para começar com a gente">
      <div className="space-y-3">
        {faqs.map((f) => (
          <details key={f.q} className="group rounded-2xl border border-white/10 bg-white/5 p-4">
            <summary className="cursor-pointer list-none text-white font-medium">{f.q}</summary>
            <p className="mt-2 text-zinc-300">{f.a}</p>
          </details>
        ))}
      </div>
    </SectionGrid>
  )
}
