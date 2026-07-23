/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enforces clean trailing slash configurations for edge crawlers
  trailingSlash: false,

  // Note: Vercel automatically optimizes images, but if you still need to bypass it 
  // for your specific use case, keep this unoptimized flag enabled.


  async headers() {
    return [
      {
        // Apply these security headers to all routes in the application
        source: '/(.*)',
        headers: [
          {
            // Resolves the Content-Security-Policy Critical Error
            key: 'Content-Security-Policy',
            // Note: External domains for Google Maps, Google Fonts, and Jotform are included based on your site's integrations
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://maps.googleapis.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' data: https://fonts.gstatic.com; img-src 'self' data: https: blob:; frame-src 'self' https://www.google.com https://form.jotform.com;",
          },
          {
            // Resolves the X-Content-Type-Options Warning
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            // Resolves the X-Frame-Options Warning
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            // Standard Best Practice Additions
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          }
        ],
      },
    ];
  },

  async redirects() {
    return [
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