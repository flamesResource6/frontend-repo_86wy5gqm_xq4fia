import { useEffect, useMemo, useRef, useState } from 'react'
import SectionGrid from './SectionGrid'
import { Loader2, Send, Trash2, Info, Copy } from 'lucide-react'

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const [toast, setToast] = useState(null)

  const valid = useMemo(() => name.trim().length >= 2 && emailRegex.test(email) && message.trim().length >= 10, [name, email, message])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Enter' && valid) handleSubmit(e)
      if (e.key === 'Escape') handleClear()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [valid])

  function handleClear() {
    setName('')
    setEmail('')
    setMessage('')
    setToast({ type: 'info', text: 'Formulário limpo.' })
    setTimeout(() => setToast(null), 2500)
  }

  async function handleSubmit(e) {
    e.preventDefault()
    if (!valid) return
    try {
      setLoading(true)
      await new Promise(r => setTimeout(r, 900))
      setToast({ type: 'success', text: 'Mensagem enviada! Em breve retornaremos.' })
      handleClear()
    } catch (err) {
      setToast({ type: 'error', text: 'Algo deu errado. Tente novamente.' })
    } finally {
      setLoading(false)
      setTimeout(() => setToast(null), 2500)
    }
  }

  return (
    <SectionGrid id="contato" title="Entre em contato" subtitle="Conte sobre seu projeto. Respondemos rapidamente.">
      <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-4">
        <div className="md:col-span-1 space-y-4">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4 focus-within:border-white/30">
            <label className="block text-sm text-zinc-400 mb-1">Nome</label>
            <input value={name} onChange={e=>setName(e.target.value)} placeholder="Seu nome" className="w-full bg-transparent outline-none text-white placeholder:text-zinc-500" />
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4 focus-within:border-white/30">
            <label className="block text-sm text-zinc-400 mb-1">E-mail</label>
            <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="voce@exemplo.com" className="w-full bg-transparent outline-none text-white placeholder:text-zinc-500" />
            {email && !emailRegex.test(email) && <p className="mt-1 text-xs text-red-400">Informe um e-mail válido.</p>}
          </div>
        </div>
        <div className="md:col-span-1">
          <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-4 focus-within:border-white/30">
            <label className="block text-sm text-zinc-400 mb-1">Mensagem</label>
            <textarea value={message} onChange={e=>setMessage(e.target.value)} placeholder="Fale sobre seu negócio e o que precisa" rows={6} className="w-full bg-transparent outline-none text-white placeholder:text-zinc-500" />
            {message && message.trim().length < 10 && <p className="mt-1 text-xs text-yellow-300">Descreva com um pouco mais de detalhes.</p>}
          </div>
        </div>
        <div className="md:col-span-2 flex flex-wrap items-center gap-3">
          <button type="submit" disabled={!valid || loading} className="inline-flex items-center gap-2 rounded-2xl bg-white text-black px-5 py-3 disabled:opacity-60">
            {loading ? <Loader2 className="animate-spin" size={18} /> : <Send size={18} />} Enviar mensagem
          </button>
          <button type="button" onClick={handleClear} className="inline-flex items-center gap-2 rounded-2xl border border-white/20 px-5 py-3 text-white hover:bg-white/10"><Trash2 size={18}/> Limpar tudo</button>
          <button type="button" onClick={()=>{navigator.clipboard.writeText('contato@binaryweb.studio'); setToast({type:'info', text:'E-mail copiado!' }); setTimeout(()=>setToast(null), 2000)}} className="inline-flex items-center gap-2 rounded-2xl border border-white/20 px-5 py-3 text-white hover:bg-white/10"><Copy size={18}/> Copiar e-mail</button>
          <div className="text-xs text-zinc-400 inline-flex items-center gap-1"><Info size={14}/>Atalhos: Enter envia • Esc limpa</div>
        </div>
      </form>

      {toast && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 rounded-full px-4 py-2 text-sm backdrop-blur-md border "+(toast.type==='error'? 'border-red-500/40 text-red-200 bg-red-500/10' : toast.type==='success'? 'border-green-500/40 text-green-200 bg-green-500/10' : 'border-white/20 text-white bg-white/10')}>{toast.text}</div>
      )}
    </SectionGrid>
  )
}
