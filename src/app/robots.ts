import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/private/'], // Protect internal asset paths or API pathways
    },
    // Plugs in your clean production sitemap mapping directly for search engines
    sitemap: 'https://www.benevolencehomeservices.com/sitemap.xml',
  };
}