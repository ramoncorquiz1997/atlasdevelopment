/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Se eliminó 'output: export' para permitir que el servidor de Node.js maneje las rutas
  images: {
    unoptimized: true,
  },
  experimental: {
    typedRoutes: true
  }
};

export default nextConfig;