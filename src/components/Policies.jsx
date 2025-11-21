import SectionGrid from './SectionGrid'

export default function Policies() {
  const now = new Date()
  const date = now.toLocaleDateString('pt-BR')
  return (
    <SectionGrid id="politicas" title="Políticas" subtitle="Termos de uso e Política de privacidade (gerados automaticamente)">
      <div className="grid md:grid-cols-2 gap-4 text-sm text-zinc-300">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <h3 className="text-white font-medium mb-2">Termos de Uso</h3>
          <p>
            Ao utilizar o site da Binary Web Studio você concorda com estes Termos. Nosso serviço consiste na criação de sites e soluções digitais personalizadas. Você concorda em fornecer informações verdadeiras e manter a comunicação durante o projeto. Podemos atualizar estes Termos a qualquer momento. Última atualização: {date}.
          </p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <h3 className="text-white font-medium mb-2">Política de Privacidade</h3>
          <p>
            Respeitamos sua privacidade. Coletamos apenas dados necessários para contato e orçamento (como nome e e-mail). Usamos esses dados exclusivamente para atender sua solicitação. Não compartilhamos suas informações com terceiros sem consentimento. Você pode solicitar exclusão dos dados a qualquer momento.
          </p>
        </div>
      </div>
    </SectionGrid>
  )
}
