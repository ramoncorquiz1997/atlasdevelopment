"use client";

import React from "react";
import ThemeToggle from "@/components/theme-toggle";
import { FadeIn, Stagger, Item } from "@/components/motion";
import Image from "next/image";
import ProjectCard from "@/components/project-card";
import { projects } from "@/data/projects";
import { Code2, Cloud, Share2, Cpu } from "lucide-react";
import { HeroGeometric } from "@/components/hero-geometric";

// ---- Desarrollo Discor — Landing (Light/Dark + Motion)

const NavLink = ({ href = "#", children }: { href?: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="text-sm md:text-base text-muted-foreground hover:text-foreground transition"
  >
    {children}
  </a>
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
      bg-card 
      border border-border
      shadow-[0_0_0_1px_rgba(0,0,0,0.02)] dark:shadow-[0_0_0_1px_rgba(255,255,255,0.02)]
      transition-all duration-300
      hover:border-primary/60
      hover:shadow-[0_0_25px_-5px_hsla(var(--primary),0.35)]
      dark:hover:shadow-[0_0_25px_-5px_hsla(var(--primary),0.45)]
      hover:bg-muted/60 dark:hover:bg-card/80
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
      bg-primary/10 text-primary
      border border-primary/30
    "
  >
    {children}
  </span>
);

export default function Discor() {
  return (
    <main className="min-h-screen bg-background text-foreground relative overflow-hidden">
      {/* ===== FONDO GLOBAL CON DETALLES EN COLOR PRIMARIO ===== */}
      <div
        aria-hidden
        className="
          pointer-events-none fixed inset-0 -z-20
          bg-[radial-gradient(circle_at_top,hsla(var(--primary),0.18),transparent_60%),radial-gradient(circle_at_bottom,hsla(var(--primary),0.12),transparent_55%)]
        "
      />
      <div
        aria-hidden
        className="
          pointer-events-none fixed inset-0 -z-30 opacity-[0.11]
          [background-image:linear-gradient(to_right,hsla(var(--primary),0.25)_1px,transparent_1px),linear-gradient(to_bottom,hsla(var(--primary),0.25)_1px,transparent_1px)]
          [background-size:80px_80px]
        "
      />

      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-black/5 dark:bg-black/30 border-b border-border shadow-[0_1px_0_0_rgba(0,0,0,0.05)]">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4 flex items-center justify-between">
          {/* LOGO */}
          <a href="/" className="flex items-center">
            <div className="relative h-10 w-[200px]">
              {/* Logo light */}
              <Image
                src="/logos/discor-light.png"
                alt="Desarrollo Discor"
                fill
                priority
                className="
                  absolute inset-0
                  object-contain
                  transition-opacity duration-300
                  opacity-100 dark:opacity-0
                "
              />
              {/* Logo dark */}
              <Image
                src="/logos/discor-dark.png"
                alt="Desarrollo Discor"
                fill
                priority
                className="
                  absolute inset-0
                  object-contain
                  transition-opacity duration-300
                  opacity-0 dark:opacity-100
                "
              />
            </div>
          </a>

          {/* NAV */}
          <nav className="hidden md:flex items-center gap-6">
            <NavLink href="#services">Servicios</NavLink>
            <NavLink href="#about">Nosotros</NavLink>
            <NavLink href="#work">Proyectos</NavLink>
            <NavLink href="#clients">Clientes</NavLink>
            <NavLink href="#contact">Contacto</NavLink>
          </nav>

          {/* Botones */}
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

      {/* HERO NUEVO (ya toma bg-background y respeta el theme) */}
      <HeroGeometric />

      {/* Services */}
      <section id="services" className="py-14 md:py-20 border-t border-border relative">
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
      <section id="about" className="py-14 md:py-20 border-t border-border relative">
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
      <section id="work" className="py-14 md:py-20 border-t border-border relative">
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
        className="py-20 border-t border-border bg-background relative"
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
      <section id="contact" className="py-20 border-t border-border relative">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <SectionTitle
            kicker="Contacto"
            title="Cuéntanos tu proyecto"
            subtitle="WhatsApp es nuestro canal principal. También puedes escribirnos por correo."
          />

          <FadeIn delay={0.02}>
            <div className="flex justify-center mt-10">
              <a
                href="https://wa.me/526461093694?text=Hola%2C%20vengo%20de%20la%20web%20de%20Desarrollo%20Discor%20y%20quiero%20información%20sobre%20un%20proyecto."
                target="_blank"
                rel="noopener noreferrer"
                className="
                  px-8 py-4 rounded-2xl font-semibold
                  bg-primary text-primary-foreground
                  shadow-[0_0_25px_-6px_hsla(var(--primary),0.45)]
                  hover:shadow-[0_0_35px_-6px_hsla(var(--primary),0.7)]
                  hover:opacity-90
                  transition-all flex items-center gap-3
                  text-lg
                "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-6 h-6"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.149-.67.15-.198.297-.768.967-.94 1.165-.173.198-.347.223-.644.075-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.074-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.007-.372-.009-.57-.009-.198 0-.52.074-.792.372-.272.298-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.87.118.57-.085 1.758-.718 2.006-1.413.248-.695.248-1.29.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                </svg>
                Escríbenos por WhatsApp
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div
              className="
                mt-14 p-8 md:p-10 rounded-3xl
                bg-card/60 backdrop-blur
                border border-border
                shadow-[0_0_25px_-8px_hsla(var(--primary),0.25)]
                transition-all
              "
            >
              <p className="text-muted-foreground text-sm mb-6">
                Si prefieres enviarnos un correo, llena el formulario:
              </p>

              <form
                className="grid md:grid-cols-2 gap-6"
                action="/api/contact"
                method="POST"
              >
                <div className="relative">
                  <label className="absolute -top-2 left-3 bg-card px-1 text-[10px] text-muted-foreground">
                    Nombre
                  </label>
                  <input
                    name="name"
                    placeholder="Tu nombre"
                    required
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
                    name="email"
                    type="email"
                    placeholder="tucorreo@empresa.com"
                    required
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
                    name="company"
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
                    name="message"
                    placeholder="Cuéntanos brevemente qué necesitas"
                    rows={5}
                    required
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
                    className="
                      px-6 py-3 rounded-xl bg-primary text-primary-foreground
                      font-medium
                      hover:shadow-[0_0_20px_-4px_hsla(var(--primary),0.5)]
                      hover:-translate-y-0.5
                      transition-all
                    "
                  >
                    Enviar correo
                  </button>
                </div>
              </form>
            </div>
          </FadeIn>
        </div>
      </section>

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