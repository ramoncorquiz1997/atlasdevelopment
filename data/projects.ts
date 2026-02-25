// data/projects.ts
export type Project = {
  slug: string;
  title: string;
  stack: string;
  summary: string;
  href?: string;
  thumb?: string; // ruta en /public
};

export const projects: Project[] = [
  {
    slug: "clipsazo",
    title: "Clipsazo",
    stack: "Next.js • Flask",
    summary:
      "Plataforma de replays para deportes: capta, procesa y publica jugadas destacadas desde cámaras en cancha.",
    href: "/proyecto/clipsazo",
    thumb: "/work/clipsazo.jpg",
  },
  {
    slug: "aduanex",
    title: "Aduanex",
    stack: "Next.js • Python • PostgreSQL • Odoo",
    summary:
      "SaaS aduanal para agencias: genera pedimentos alineados al Anexo 22, motor de reglas por clave de pedimento, validaciones estructurales y portal de seguimiento para clientes.",
    href: "/proyecto/aduanex",
    thumb: "/work/aduanex.jpg",
  },
];