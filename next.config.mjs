// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        taint: true,
      },
      images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'cdn.sanity.io',
            port: '',
          },
        ],
      },
};

export default nextConfig;
