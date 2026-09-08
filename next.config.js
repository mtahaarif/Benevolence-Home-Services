/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enforces clean URL paths without trailing slashes across crawlers
  trailingSlash: false,

  // PAGE SPEED: Enables Brotli/Gzip compression on all text assets
  compress: true,

  // PAGE SPEED: Converts raster assets to modern AVIF & WebP formats with 1-year caching
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 31536000,
  },

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              // Allows Next.js inline scripts, Google Tag Manager, Google Analytics, and Google Maps
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://maps.googleapis.com https://www.googletagmanager.com https://*.google-analytics.com",
              // Stylesheets: Tailwind inline styles & Google Fonts
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              // Fonts: Google Fonts and inline data URIs
              "font-src 'self' data: https://fonts.gstatic.com",
              // Images: Next.js optimized images, GTM, and GA tracking pixels
              "img-src 'self' data: blob: https: https://www.googletagmanager.com https://*.google-analytics.com",
              // Connect endpoints: Resolves net::ERR_FAILED console runtime exceptions
              "connect-src 'self' https://www.googletagmanager.com https://*.google-analytics.com https://*.analytics.google.com https://stats.g.doubleclick.net https://api.jotform.com https://form.jotform.com",
              // Embeds: Google Maps iframes, Jotform, and Calendly modal
              "frame-src 'self' https://www.google.com https://form.jotform.com https://calendly.com",
              "object-src 'none'",
              "base-uri 'self'",
            ].join('; '),
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
      // PAGE SPEED: Static immutable browser cache for public media
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
      // 1. Force Canonical Hostname: 301 Redirect apex to www to kill duplicate content
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'benevolencehomeservices.com',
          },
        ],
        destination: 'https://www.benevolencehomeservices.com/:path*',
        permanent: true,
      },
      // 2. Legacy index cleanups: Emits permanent 301s to prevent duplicate homepage penalties
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