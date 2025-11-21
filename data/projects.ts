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
  // agrega más… (no pasa nada si hay < 6)
];
