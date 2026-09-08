/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false,

  // PAGE SPEED FIX: Enable Brotli/Gzip compression on all responses
  compress: true,

  // PAGE SPEED FIX: Optimize modern image formats (AVIF & WebP)
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 31536000, // 1 year cache for static assets
  },

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://maps.googleapis.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' data: https://fonts.gstatic.com; img-src 'self' data: https: blob:; frame-src 'self' https://www.google.com https://form.jotform.com;",
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
      // PAGE SPEED FIX: Cache immutable static assets for 1 year
      {
        source: '/(.*).(jpg|jpeg|png|webp|avif|ico|svg)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },

  async redirects() {
    return [
      // CRITICAL DOMAIN FIX: Force 301 (instead of Vercel 308) from non-www to www
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'benevolencehomeservices.com',
          },
        ],
        destination: 'https://www.benevolencehomeservices.com/:path*',
        permanent: true, // Emits a true 301 Moved Permanently
      },
      // Legacy index redirects
      {
        source: '/index.html',
        destination: '/',
        permanent: true,
      },
      {
        source: '/index.php',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;