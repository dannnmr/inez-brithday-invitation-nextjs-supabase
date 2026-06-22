import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.supabase.co",
        pathname: "/storage/v1/object/public/**",
      },
    ],
  },
  // Debe ir aquí afuera, al mismo nivel que "images"
  allowedDevOrigins: ["localhost:3000", "127.0.0.1:3000", "192.168.0.3"],
};

export default nextConfig;