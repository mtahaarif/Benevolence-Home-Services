/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enforces clean trailing slash configurations for edge crawlers
  trailingSlash: false,

  // Tells Next.js to build a standard static HTML/CSS/JS architecture
  output: 'export', 

  // Required for static exports because standard dynamic node image resizing requires a live server
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;