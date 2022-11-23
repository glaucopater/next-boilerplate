/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'reqres.in', 
        pathname: '/img/**',
      },
    ],
  },
};

module.exports = nextConfig;
