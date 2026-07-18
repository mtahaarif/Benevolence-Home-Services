/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enforces clean trailing slash configurations for edge crawlers
  trailingSlash: false,

  // Bundles everything needed into a clean runtime build isolated for GoDaddy node hosting
  output: 'standalone', 
  
  async redirects() {
    return [
      {
        source: '/index.html',
        destination: '/',
        permanent: true, // Issues a clean 301 redirect token
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