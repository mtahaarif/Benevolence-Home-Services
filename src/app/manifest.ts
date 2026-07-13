import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Benevolence Home Services",
    short_name: "Benevolence",
    description: "Compassionate, Nurse-Led Home Care Services",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0c3e72",
    icons: [
      {
        src: "/footer-logo.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}