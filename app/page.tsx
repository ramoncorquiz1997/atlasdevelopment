import React from "react";
import ThemeToggle from "@/components/theme-toggle";
import { FadeIn, Stagger, Item } from "@/components/motion";
import Image from "next/image";
import ProjectCard from "@/components/project-card";
import { projects } from "@/data/projects";
import { Code2, Cloud, Share2, Cpu } from "lucide-react";

// ---- Desarrollo Discor — Landing (Light/Dark + Motion)

const NavLink = ({ href = "#", children }: { href?: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="text-sm md:text-base text-muted-foreground hover:text-foreground transition"
  >
    {children}
  </a>
);

const Stat = ({ value, label }: { value: string; label: string }) => (
  <div className="flex flex-col items-start">
    <span className="text-3xl md:text-4xl font-semibold text-foreground">{value}</span>
    <span className="text-xs md:text-sm text-muted-foreground">{label}</span>
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
      <p className="uppercase tracking-widest text-[10px] md:text-xs text-primary/80">
        {kicker}
      </p>
    )}
    <h2 className="text-2xl md:text-4xl font-semibold text-foreground">{title}</h2>
    {subtitle && <p className="text-sm md:text-base text-muted-foreground">{subtitle}</p>}
  </div>
);

const Card = ({ href = "#", children }: { href?: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="
      group block rounded-2xl p-5 md:p-6
      bg-white dark:bg-zinc-900/60 
      border border-zinc-200 dark:border-zinc-800 
      shadow-[0_0_0_1px_rgba(0,0,0,0.02)] dark:shadow-[0_0_0_1px_rgba(255,255,255,0.02)]
      transition-all duration-300

      hover:border-emerald-500/40
      hover:shadow-[0_0_25px_-5px_rgba(16,185,129,0.15)]
      dark:hover:shadow-[0_0_25px_-5px_rgba(16,185,129,0.25)]
      hover:bg-emerald-50/30 dark:hover:bg-emerald-400/5
      hover:-translate-y-1
    "
  >
    {children}
  </a>
);

const Pill = ({ children }: { children: React.ReactNode }) => (
  <span
    className="
      inline-flex items-center
      px-3 py-1 rounded-full
      text-[10px] md:text-xs tracking-wide
      bg-emerald-500/10 text-emerald-400
      border border-emerald-500/30
    "
  >
    {children}
  </span>
);

export default function Discor() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-black/5 dark:bg-black/30 border-b border-border shadow-[0_1px_0_0_rgba(0,0,0,0.05)]">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="size-8 md:size-9 grid place-items-center rounded-lg bg-primary text-primary-foreground font-bold">
              D
            </div>
            <div className="leading-tight">
              <div className="font-semibold text-sm md:text-base text-foreground">
                Desarrollo DISCOR
              </div>
              <div className="text-[10px] md:text-xs text-muted-foreground">
                Building the digital world
              </div>
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
              className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary text-primary-foreground font-medium hover:opacity-90 transition"
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
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24 grid lg:grid-cols-2 gap-10 items-center relative">
          <div className="space-y-6">
            <FadeIn>
              <div className="inline-flex flex-col items-start gap-2">
                <span className="text-4xl md:text-6xl font-semibold text-emerald-600 dark:text-emerald-400 leading-none">
                  Desarrollo DISCOR
                </span>
                <Pill>Solidez • Escalabilidad • Precisión</Pill>
              </div>
            </FadeIn>

            <FadeIn delay={0.05}>
              <h1 className="text-xl md:text-4xl font-semibold leading-tight text-foreground">
                Construimos software <span className="text-primary">sólido</span> y
                <span className="text-primary"> escalable</span> para tu futuro digital
              </h1>
            </FadeIn>

            <FadeIn delay={0.1}>
              <p className="text-base md:text-lg text-muted-foreground max-w-xl">
                Ingeniería y desarrollo a la medida: web, APIs, integraciones, nube e IA aplicada.
              </p>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className="px-5 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:opacity-90 transition"
                >
                  Solicitar cotización
                </a>
                <a
                  href="#work"
                  className="px-5 py-3 rounded-xl border border-border hover:bg-muted"
                >
                  Ver proyectos
                </a>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="flex gap-8 pt-4">
                <Stat value="> 50k" label="Usuarios finales impactados" />
                <Stat value="99.9%" label="Disponibilidad de servicios" />
                <Stat value="> 8 años" label="de experiencia acumulada" />
              </div>
            </FadeIn>
          </div>

          {/* Hero Visual */}
          <FadeIn delay={0.12}>
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl border border-border bg-muted p-6">
                <div className="grid grid-cols-6 gap-2 h-full">
                  {[...Array(18)].map((_, i) => (
                    <div
                      key={i}
                      className="rounded-xl border border-border bg-card/80"
                    />
                  ))}
                </div>

                <div className="absolute -bottom-3 -right-3 rounded-2xl border border-border bg-card p-3 shadow-sm">
                  <div className="text-[10px] text-muted-foreground">Stack</div>
                  <div className="flex gap-2 mt-1 text-xs">
                    {["Next.js", "Flask", "PostgreSQL", "Docker", "AWS", "Python"].map((s) => (
                      <span
                        key={s}
                        className="px-2 py-1 rounded-lg bg-muted border border-border"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-14 md:py-20 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 md:px-6 space-y-10">
          <SectionTitle
            kicker="Servicios"
            title="Qué hacemos"
            subtitle="Soluciones hechas a la medida, listas para crecer y duraderas."
          />
          <Stagger>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {[
                {
                  t: "Software a la medida",
                  d: "Arquitectura, backend, frontend y QA. Del discovery al despliegue.",
                  icon: Code2,
                },
                {
                  t: "Web & Cloud",
                  d: "SaaS, PWAs y microservicios sobre nubes modernas.",
                  icon: Cloud,
                },
                {
                  t: "Integraciones & APIs",
                  d: "Conecta ERPs, CRMs, pasarelas de pago y servicios externos.",
                  icon: Share2,
                },
                {
                  t: "IA & Automatización",
                  d: "Modelos, RAG, asistentes y flujos que ahorran tiempo.",
                  icon: Cpu,
                },
              ].map((c) => (
                <Item key={c.t}>
                  <Card>
                    <div className="flex flex-col gap-3">
                      <div className="size-10 rounded-xl bg-primary/10 border border-primary/20 grid place-items-center">
                        <c.icon className="h-5 w-5 text-primary" />
                      </div>

                      <h3 className="text-lg font-medium text-foreground">{c.t}</h3>
                      <p className="text-sm text-muted-foreground">{c.d}</p>
                      <a
                        href="#contact"
                        className="text-xs text-primary hover:underline"
                      >
                        Solicitar propuesta →
                      </a>
                    </div>
                  </Card>
                </Item>
              ))}
            </div>
          </Stagger>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-14 md:py-20 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-10 items-center">
          <FadeIn>
            <div className="space-y-4">
              <SectionTitle kicker="Nosotros" title="Ingeniería con propósito" />
              <p className="text-sm md:text-base text-muted-foreground">
                Nacimos para construir sistemas que sostengan operaciones reales. Creemos en arquitectura limpia,
                estándares abiertos y ciclos de entrega predecibles. Tu producto no solo debe verse bien, debe durar.
              </p>
              <ul className="grid sm:grid-cols-2 gap-3 text-sm text-foreground">
                <li className="flex items-center gap-2">
                  <span className="size-2 rounded-full bg-primary" />
                  Código mantenible
                </li>
                <li className="flex items-center gap-2">
                  <span className="size-2 rounded-full bg-primary" />
                  Observabilidad y métricas
                </li>
                <li className="flex items-center gap-2">
                  <span className="size-2 rounded-full bg-primary" />
                  Seguridad por diseño
                </li>
                <li className="flex items-center gap-2">
                  <span className="size-2 rounded-full bg-primary" />
                  DevOps & CI/CD
                </li>
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={0.08}>
            <div className="grid gap-4">
              <Card>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs text-muted-foreground">Uptime</div>
                    <div className="text-3xl font-semibold text-foreground">99.9%</div>
                  </div>
                  <div className="h-12 w-40 rounded-lg bg-primary/10" />
                </div>
              </Card>
              <Card>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs text-muted-foreground">Proyectos activos</div>
                    <div className="text-3xl font-semibold text-foreground">12</div>
                  </div>
                  <div className="h-12 w-40 rounded-lg bg-primary/10" />
                </div>
              </Card>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="py-14 md:py-20 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 md:px-6 space-y-10">
          <SectionTitle
            kicker="Casos"
            title="Proyectos y resultados"
            subtitle="Desafío → Solución → Impacto. Algunos ejemplos representativos."
          />
          <Stagger>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {projects.slice(0, 6).map((p) => (
                <Item key={p.slug}>
                  <ProjectCard
                    title={p.title}
                    stack={p.stack}
                    summary={p.summary}
                    href={p.href}
                    thumb={p.thumb}
                  />
                </Item>
              ))}
            </div>
          </Stagger>
        </div>
      </section>

      {/* Clients */}
      <section
        id="clients"
        className="py-20 border-t border-border bg-background"
      >
        <div className="max-w-6xl mx-auto px-6 space-y-12">
          <SectionTitle
            kicker="Confianza"
            title="Empresas y productos"
            subtitle="Algunas marcas con las que hemos colaborado o desarrollado internamente."
          />

          <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-12 mt-6">
            {[
              { name: "CESPM", src: "/logos/cespm.jpg", href: "https://www.cespm.gob.mx" },
              { name: "Las Palmas", src: "/logos/padel-palmas.jpg", href: "https://www.instagram.com/padelpalmas" },
              { name: "Clipsazo", src: "/logos/clipsazo_logo.jpg", href: "https://clipsazo.com" },
            ].map((c) => (
              <a
                key={c.name}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-40 sm:w-48 md:w-56 h-24 md:h-28 group"
              >
                <Image
                  src={c.src}
                  alt={c.name}
                  width={240}
                  height={120}
                  className={`
                    object-contain w-full h-full
                    opacity-80 grayscale contrast-[0.9] brightness-90
                    group-hover:opacity-100 group-hover:grayscale-0 group-hover:brightness-100 group-hover:contrast-100
                    transition-all duration-300 ease-out
                  `}
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 border-t border-border">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <SectionTitle
            kicker="Contacto"
            title="Cuéntanos tu proyecto"
            subtitle="Te respondemos en menos de 24 horas hábiles."
          />

          <FadeIn delay={0.05}>
            <div
              className="
                mt-12 p-8 md:p-10 rounded-3xl
                bg-card/60 backdrop-blur
                border border-border
                shadow-[0_0_25px_-8px_rgba(16,185,129,0.15)]
                transition-all
              "
            >
              <form className="grid md:grid-cols-2 gap-6">
                
                {/* Campo */}
                <div className="relative">
                  <label className="absolute -top-2 left-3 bg-card px-1 text-[10px] text-muted-foreground">
                    Nombre
                  </label>
                  <input
                    placeholder="Tu nombre"
                    className="w-full rounded-xl bg-background border border-border text-foreground
                              placeholder:text-muted-foreground px-4 py-3 outline-none
                              focus:border-primary/60 transition"
                  />
                </div>

                <div className="relative">
                  <label className="absolute -top-2 left-3 bg-card px-1 text-[10px] text-muted-foreground">
                    Correo
                  </label>
                  <input
                    type="email"
                    placeholder="tucorreo@empresa.com"
                    className="w-full rounded-xl bg-background border border-border text-foreground
                              placeholder:text-muted-foreground px-4 py-3 outline-none
                              focus:border-primary/60 transition"
                  />
                </div>

                <div className="relative md:col-span-2">
                  <label className="absolute -top-2 left-3 bg-card px-1 text-[10px] text-muted-foreground">
                    Empresa (opcional)
                  </label>
                  <input
                    placeholder="Nombre de tu empresa"
                    className="w-full rounded-xl bg-background border border-border text-foreground
                              placeholder:text-muted-foreground px-4 py-3 outline-none
                              focus:border-primary/60 transition"
                  />
                </div>

                <div className="relative md:col-span-2">
                  <label className="absolute -top-2 left-3 bg-card px-1 text-[10px] text-muted-foreground">
                    Alcance del proyecto
                  </label>
                  <textarea
                    placeholder="Cuéntanos brevemente qué necesitas"
                    rows={5}
                    className="w-full rounded-xl bg-background border border-border text-foreground
                              placeholder:text-muted-foreground px-4 py-3 outline-none
                              focus:border-primary/60 transition"
                  />
                </div>

                <div className="md:col-span-2 flex items-center justify-between">
                  <div className="text-xs text-muted-foreground">
                    Al enviar aceptas ser contactado por Desarrollo Discor.
                  </div>
                  <button
                    type="submit"
                    className="px-6 py-3 rounded-xl bg-primary text-primary-foreground
                              font-medium hover:shadow-[0_0_20px_-4px_rgba(16,185,129,0.5)]
                              hover:-translate-y-0.5 transition-all"
                  >
                    Enviar
                  </button>
                </div>
              
              </form>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div>© {new Date().getFullYear()} Desarrollo Discor. Todos los derechos reservados.</div>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-foreground">LinkedIn</a>
            <a href="#" className="hover:text-foreground">GitHub</a>
            <a href="#" className="hover:text-foreground">desarollo@discor.com.mx</a>
          </div>
        </div>
      </footer>
    </main>
  );
}