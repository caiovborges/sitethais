/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Otimizações para produção
  compress: true,
  poweredByHeader: false,
}

export default nextConfig
