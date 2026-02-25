"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { cn } from "@/lib/utils";

// color naranja directo (Tailwind orange-500 aproximado)
const ORANGE = "rgba(249, 115, 22, 1)";
const ORANGE_BG = "rgba(249, 115, 22, 0.14)";
const ORANGE_BORDER = "rgba(249, 115, 22, 0.6)";
const ORANGE_GLOW = "rgba(249, 115, 22, 0.55)";
const ORANGE_HIGHLIGHT = "rgba(249, 115, 22, 0.7)";

type ElegantShapeProps = {
  className?: string;
  delay?: number;
  width?: number;
  height?: number;
  rotate?: number;
};

function ElegantShape({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
}: ElegantShapeProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -150,
        rotate: rotate - 15,
      }}
      animate={{
        opacity: 1,
        y: 0,
        rotate: rotate,
      }}
      transition={{
        duration: 2.4,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1.2 },
      }}
      className={cn("absolute", className)}
    >
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        style={{ width, height }}
        className="relative"
      >
        <div
          className={cn(
            "absolute inset-0 rounded-full",
            // fondo naranja suave
            "bg-[rgba(249,115,22,0.14)]",
            // borde naranja
            "border",
            "border-[rgba(249,115,22,0.6)]",
            // blur + glow naranja
            "backdrop-blur-[3px]",
            "shadow-[0_0_48px_0_rgba(249,115,22,0.55)]",
            // highlight interno naranja
            "after:absolute after:inset-0 after:rounded-full",
            "after:bg-[radial-gradient(circle_at_35%_35%,rgba(249,115,22,0.7),transparent_65%)]"
          )}
        />
      </motion.div>
    </motion.div>
  );
}

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay: 0.5 + i * 0.2,
      ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number],
    },
  }),
};

export function HeroGeometric() {
  return (
    <section className="relative w-full overflow-hidden bg-background text-foreground">
      <div className="relative min-h-[70vh] md:min-h-[80vh] flex items-center justify-center">
        {/* glow general naranja */}
        <div
          className="absolute inset-0 pointer-events-none blur-3xl"
          style={{
            background:
              "radial-gradient(circle at 0% 0%, rgba(249,115,22,0.18), transparent 55%)," +
              "radial-gradient(circle at 100% 100%, rgba(249,115,22,0.2), transparent 55%)",
          }}
        />

        {/* shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <ElegantShape
            delay={0.3}
            width={600}
            height={140}
            rotate={12}
            className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
          />

          <ElegantShape
            delay={0.5}
            width={520}
            height={130}
            rotate={-15}
            className="right-[-5%] md:right-[0%] top-[68%] md:top-[72%]"
          />

          <ElegantShape
            delay={0.4}
            width={340}
            height={90}
            rotate={-8}
            className="left-[5%] md:left-[10%] bottom-[4%] md:bottom-[10%]"
          />

          <ElegantShape
            delay={0.6}
            width={220}
            height={70}
            rotate={20}
            className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]"
          />

          <ElegantShape
            delay={0.7}
            width={170}
            height={50}
            rotate={-25}
            className="left-[20%] md:left-[25%] top-[5%] md:top-[10%]"
          />
        </div>

        {/* contenido */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 py-20 md:py-28">
          <div className="max-w-3xl mx-auto text-center">
            {/* Títulos */}
            <motion.div
              custom={1}
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
            >
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-6 md:mb-8 tracking-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/80">
                  Construimos software
                </span>
                <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[rgba(249,115,22,1)] via-foreground/95 to-[rgba(249,115,22,1)]">
                  sólido y escalable
                </span>
              </h1>
            </motion.div>

            {/* Subtítulo */}
            <motion.div
              custom={2}
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
            >
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed font-light tracking-wide max-w-xl mx-auto">
                Ingeniería y desarrollo a la medida: web, APIs, integraciones,
                nube e IA aplicada para que tu operación funcione en serio.
              </p>
            </motion.div>

            {/* CTAs */}
            <motion.div
              custom={3}
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap justify-center gap-3 mb-10"
            >
              <a
                href="#contact"
                className="px-6 py-3 rounded-xl bg-[rgba(249,115,22,1)] text-primary-foreground font-medium hover:opacity-90 transition shadow-[0_0_25px_-8px_rgba(249,115,22,0.9)]"
              >
                Solicitar cotización
              </a>
              <a
                href="#work"
                className="px-6 py-3 rounded-xl border border-border bg-background/60 text-foreground hover:bg-muted transition"
              >
                Ver proyectos
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              custom={4}
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap justify-center gap-8 text-left text-foreground/90"
            >
              <div className="flex flex-col min-w-[120px]">
                <span className="text-2xl md:text-3xl font-semibold">
                  &gt; 50k
                </span>
                <span className="text-xs md:text-sm text-muted-foreground">
                  Usuarios finales impactados
                </span>
              </div>
              <div className="flex flex-col min-w-[120px]">
                <span className="text-2xl md:text-3xl font-semibold">
                  99.9%
                </span>
                <span className="text-xs md:text-sm text-muted-foreground">
                  Disponibilidad de servicios
                </span>
              </div>
              <div className="flex flex-col min-w-[120px]">
                <span className="text-2xl md:text-3xl font-semibold">
                  &gt; 8 años
                </span>
                <span className="text-xs md:text-sm text-muted-foreground">
                  de experiencia acumulada
                </span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* overlay para fundir con el fondo general */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/80 pointer-events-none" />
      </div>
    </section>
  );
}