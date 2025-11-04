import React from "react";
import ThemeToggle from "@/components/theme-toggle";

// ---- ATLAS DEVELOPMENT — Landing (Light/Dark polished)
// Ajustes clave:
// - Usamos vars globales para fondo/texto y clases `dark:` donde aplica.
// - NavLink, textos muted y bordes con versiones light/dark.
// - Hero visual y Cards con estilos duales.
// - Inputs y botones secundarios con contraste en light.

const NavLink = ({ href = "#", children }: { href?: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="text-sm md:text-base text-zinc-600 dark:text-zinc-300 hover:text-black dark:hover:text-white transition"
  >
    {children}
  </a>
);

const Stat = ({ value, label }: { value: string; label: string }) => (
  <div className="flex flex-col items-start">
    <span className="text-3xl md:text-4xl font-semibold text-[var(--foreground)]">{value}</span>
    <span className="text-xs md:text-sm text-zinc-600 dark:text-zinc-400">{label}</span>
  </div>
);

const SectionTitle = ({
  kicker,
  title,
  subtitle,
}: {
  kicker?: string;
  title: string;
  subtitle?: string;
}) => (
  <div className="max-w-3xl mx-auto text-center space-y-3">
    {kicker && (
      <p className="uppercase tracking-widest text-[10px] md:text-xs text-emerald-600/80 dark:text-emerald-400/80">
        {kicker}
      </p>
    )}
    <h2 className="text-2xl md:text-4xl font-semibold text-[var(--foreground)]">{title}</h2>
    {subtitle && <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-400">{subtitle}</p>}
  </div>
);

const Card = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-white dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-5 md:p-6 shadow-[0_0_0_1px_rgba(0,0,0,0.02)] dark:shadow-[0_0_0_1px_rgba(255,255,255,0.02)] hover:shadow-[0_0_0_1px_rgba(22,163,74,0.25)] transition-all">
    {children}
  </div>
);

const Pill = ({ children }: { children: React.ReactNode }) => (
  <span className="px-2 py-1 rounded-full bg-emerald-100/60 text-emerald-700 border border-emerald-600/20 dark:bg-emerald-400/10 dark:text-emerald-300 dark:border-emerald-500/20 text-[10px] md:text-xs tracking-wide">
    {children}
  </span>
);

export default function AtlasDevelopmentLanding() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur bg-white/80 dark:bg-black/30 border-b border-zinc-200 dark:border-zinc-800 shadow-[0_1px_0_0_rgba(0,0,0,0.04)] dark:shadow-none">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="size-8 md:size-9 grid place-items-center rounded-lg bg-gradient-to-br from-emerald-500 to-emerald-700 text-black font-bold">
              A
            </div>
            <div className="leading-tight">
              <div className="font-semibold text-sm md:text-base text-[var(--foreground)]">Atlas Development</div>
              <div className="text-[10px] md:text-xs text-zinc-500 dark:text-zinc-400">Building the digital world</div>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <NavLink href="#services">Servicios</NavLink>
            <NavLink href="#about">Nosotros</NavLink>
            <NavLink href="#work">Proyectos</NavLink>
            <NavLink href="#clients">Clientes</NavLink>
            <NavLink href="#contact">Contacto</NavLink>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500 text-black font-medium hover:bg-emerald-400 transition"
            >
              Cotizar
            </a>
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_10%,rgba(16,185,129,0.12)_0%,transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24 grid lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <Pill>Solidez • Escalabilidad • Precisión</Pill>
            <h1 className="text-3xl md:text-6xl font-semibold leading-tight text-[var(--foreground)]">
              Construimos software <span className="text-emerald-600 dark:text-emerald-400">sólido</span> y
              <span className="text-emerald-600 dark:text-emerald-400"> escalable</span> para tu futuro digital
            </h1>
            <p className="text-zinc-600 dark:text-zinc-400 text-base md:text-lg max-w-xl">
              Ingeniería y desarrollo a la medida: web, APIs, integraciones, nube e IA aplicada. Como Atlas, sostenemos
              sistemas que crecen con tu negocio.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#contact"
                className="px-5 py-3 rounded-xl bg-emerald-500 text-black font-medium hover:bg-emerald-400 transition"
              >
                Solicitar cotización
              </a>
              <a
                href="#work"
                className="px-5 py-3 rounded-xl border border-zinc-300 hover:bg-zinc-50 dark:border-zinc-800 dark:hover:border-zinc-700"
              >
                Ver proyectos
              </a>
            </div>
            <div className="flex gap-8 pt-4">
              <Stat value="> 50k" label="Usuarios finales impactados" />
              <Stat value="99.9%" label="Disponibilidad de servicios" />
              <Stat value="> 8 años" label="de experiencia acumulada" />
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-gradient-to-b dark:from-zinc-900 dark:to-black p-6">
              <div className="grid grid-cols-6 gap-2 h-full">
                {[...Array(18)].map((_, i) => (
                  <div
                    key={i}
                    className="rounded-xl border border-zinc-200 bg-white dark:border-zinc-800/60 dark:bg-zinc-900/50"
                  />
                ))}
              </div>
              <div className="absolute -bottom-3 -right-3 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/90 dark:bg-black p-3 shadow-sm dark:shadow">
                <div className="text-[10px] text-zinc-500 dark:text-zinc-400">Stack</div>
                <div className="flex gap-2 mt-1 text-xs">
                  {["Next.js", "Flask", "PostgreSQL", "Docker", "AWS", "Python"].map((s) => (
                    <span
                      key={s}
                      className="px-2 py-1 rounded-lg bg-zinc-100 border border-zinc-200 dark:bg-zinc-900 dark:border-zinc-800"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-14 md:py-20 border-t border-zinc-200 dark:border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 md:px-6 space-y-10">
          <SectionTitle
            kicker="Servicios"
            title="Qué hacemos"
            subtitle="Soluciones hechas a la medida, listas para crecer y mantenerse en el tiempo."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              { t: "Software a la medida", d: "Arquitectura, backend, frontend y QA. Del discovery al despliegue." },
              { t: "Web & Cloud", d: "SaaS, PWAs y microservicios sobre nubes modernas." },
              { t: "Integraciones & APIs", d: "Conecta ERPs, CRMs, pasarelas de pago y servicios externos." },
              { t: "IA & Automatización", d: "Modelos, RAG, asistentes y flujos que ahorran tiempo." },
            ].map((c) => (
              <Card key={c.t}>
                <div className="flex flex-col gap-3">
                  <div className="size-10 rounded-xl bg-emerald-100/60 border border-emerald-600/20 dark:bg-emerald-400/10 dark:border-emerald-500/20" />
                  <h3 className="text-lg font-medium text-[var(--foreground)]">{c.t}</h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">{c.d}</p>
                  <a href="#contact" className="text-xs text-emerald-700 dark:text-emerald-300 hover:underline">
                    Solicitar propuesta →
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-14 md:py-20 border-t border-zinc-200 dark:border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-4">
            <SectionTitle kicker="Nosotros" title="Ingeniería con propósito" />
            <p className="text-zinc-600 dark:text-zinc-400 text-sm md:text-base">
              Nacimos para construir sistemas que sostengan operaciones reales. Creemos en arquitectura limpia,
              estándares abiertos y ciclos de entrega predecibles. Tu producto no solo debe verse bien, debe durar.
            </p>
            <ul className="grid sm:grid-cols-2 gap-3 text-sm text-zinc-700 dark:text-zinc-300">
              <li className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-emerald-600 dark:bg-emerald-400" />
                Código mantenible
              </li>
              <li className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-emerald-600 dark:bg-emerald-400" />
                Observabilidad y métricas
              </li>
              <li className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-emerald-600 dark:bg-emerald-400" />
                Seguridad por diseño
              </li>
              <li className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-emerald-600 dark:bg-emerald-400" />
                DevOps & CI/CD
              </li>
            </ul>
          </div>
          <div className="grid gap-4">
            <Card>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-zinc-600 dark:text-zinc-400 text-xs">Uptime</div>
                  <div className="text-3xl font-semibold text-[var(--foreground)]">99.9%</div>
                </div>
                <div className="h-12 w-40 rounded-lg bg-gradient-to-r from-emerald-500/15 to-transparent dark:from-emerald-500/20" />
              </div>
            </Card>
            <Card>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-zinc-600 dark:text-zinc-400 text-xs">Proyectos activos</div>
                  <div className="text-3xl font-semibold text-[var(--foreground)]">12</div>
                </div>
                <div className="h-12 w-40 rounded-lg bg-gradient-to-r from-emerald-500/15 to-transparent dark:from-emerald-500/20" />
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="py-14 md:py-20 border-t border-zinc-200 dark:border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 md:px-6 space-y-10">
          <SectionTitle
            kicker="Casos"
            title="Proyectos & resultados"
            subtitle="Desafío → Solución → Impacto. Algunos ejemplos representativos."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Card key={i}>
                <div className="space-y-3">
                  <div className="aspect-video rounded-xl bg-zinc-100 border border-zinc-200 dark:bg-zinc-900 dark:border-zinc-800" />
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium text-[var(--foreground)]">Proyecto #{i}</h3>
                    <span className="text-[10px] px-2 py-1 rounded bg-zinc-100 border border-zinc-200 dark:bg-zinc-900 dark:border-zinc-800">
                      Next.js • Flask
                    </span>
                  </div>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    Breve descripción del desafío y la solución implementada. Resultado medible.
                  </p>
                  <a href="#contact" className="text-xs text-emerald-700 dark:text-emerald-300 hover:underline">
                    Ver detalle →
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Clients */}
      <section id="clients" className="py-14 md:py-20 border-t border-zinc-200 dark:border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 md:px-6 space-y-10">
          <SectionTitle
            kicker="Confianza"
            title="Empresas y productos"
            subtitle="Algunas marcas con las que hemos colaborado o desarrollado internamente."
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {["Aliquam", "OptiFlota", "RentHub", "Atlas Labs"].map((c) => (
              <div
                key={c}
                className="h-16 rounded-2xl bg-zinc-100 border border-zinc-200 grid place-items-center text-zinc-500 dark:bg-zinc-900 dark:border-zinc-800 dark:text-zinc-400"
              >
                {c}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-14 md:py-20 border-t border-zinc-200 dark:border-zinc-900">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <SectionTitle kicker="Contacto" title="Cuéntanos tu proyecto" subtitle="Te respondemos en menos de 24 horas hábiles." />
          <form className="mt-10 grid md:grid-cols-2 gap-4">
            <input
              placeholder="Nombre"
              className="w-full rounded-xl bg-white border border-zinc-300 text-zinc-900 placeholder:text-zinc-400 outline-none focus:border-emerald-500/50 dark:bg-zinc-900 dark:border-zinc-800 dark:text-zinc-100"
            />
            <input
              placeholder="Correo"
              type="email"
              className="w-full rounded-xl bg-white border border-zinc-300 text-zinc-900 placeholder:text-zinc-400 outline-none focus:border-emerald-500/50 dark:bg-zinc-900 dark:border-zinc-800 dark:text-zinc-100"
            />
            <input
              placeholder="Empresa (opcional)"
              className="w-full rounded-xl bg-white border border-zinc-300 text-zinc-900 placeholder:text-zinc-400 outline-none focus:border-emerald-500/50 md:col-span-2 dark:bg-zinc-900 dark:border-zinc-800 dark:text-zinc-100"
            />
            <textarea
              placeholder="Cuéntanos brevemente el alcance"
              rows={5}
              className="w-full rounded-xl bg-white border border-zinc-300 text-zinc-900 placeholder:text-zinc-400 outline-none focus:border-emerald-500/50 md:col-span-2 dark:bg-zinc-900 dark:border-zinc-800 dark:text-zinc-100"
            />
            <div className="md:col-span-2 flex items-center justify-between">
              <div className="text-xs text-zinc-600 dark:text-zinc-500">
                Al enviar aceptas ser contactado por Atlas Development.
              </div>
              <button
                type="submit"
                className="px-5 py-3 rounded-xl bg-emerald-500 text-black font-medium hover:bg-emerald-400 transition"
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-200 dark:border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-zinc-600 dark:text-zinc-400 text-sm">
          <div>© {new Date().getFullYear()} Atlas Development. Todos los derechos reservados.</div>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-black dark:hover:text-white">LinkedIn</a>
            <a href="#" className="hover:text-black dark:hover:text-white">GitHub</a>
            <a href="#" className="hover:text-black dark:hover:text-white">contacto@atlasdevelopment.mx</a>
          </div>
        </div>
      </footer>
    </main>
  );
}