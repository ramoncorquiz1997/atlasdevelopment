/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',      // <--- Añade esto para generar archivos estáticos (.html, .css, .js)
  images: {
    unoptimized: true,   // <--- Obligatorio si usas el componente <Image> de Next.js sin servidor
  },
  experimental: {
    typedRoutes: true
  }
};

export default nextConfig;