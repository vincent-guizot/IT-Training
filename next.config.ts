/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true, // this should be true (default in Next.js 13+)
  },
};

module.exports = nextConfig;
