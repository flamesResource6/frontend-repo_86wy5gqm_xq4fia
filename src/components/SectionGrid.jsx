export default function SectionGrid({ id, title, subtitle, children }) {
  return (
    <section id={id} className="relative py-20">
      {/* subtle modern grid background */}
      <div className="absolute inset-0 -z-0 opacity-[0.08] bg-[linear-gradient(to_right,rgba(255,255,255,0.25)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.25)_1px,transparent_1px)] bg-[size:24px_24px]" />
      {/* gradient fade to clean background */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold text-white">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-zinc-300 to-white">
              {title}
            </span>
          </h2>
          {subtitle && <p className="mt-2 text-zinc-400 max-w-2xl">{subtitle}</p>}
        </div>
        {children}
      </div>
    </section>
  )
}
