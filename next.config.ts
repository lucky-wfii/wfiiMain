import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Performance optimizations
  experimental: {
    optimizeCss: true,
    optimizePackageImports: [
      '@radix-ui/react-slot',
      '@radix-ui/react-label',
      'clsx',
      'tailwind-merge',
      'lucide-react',
      'motion'
    ],
  },

  // Image optimization
  images: {
    formats: ['image/webp', 'image/avif',],
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    minimumCacheTTL: 31536000, // 1 year
    unoptimized: true,
    qualities: [75, 85],
  },

  // Compression and caching
  compress: true,
  poweredByHeader: false,
};

export default nextConfig;
