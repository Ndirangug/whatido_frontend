/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['donnysliststory.sfo3.cdn.digitaloceanspaces.com'],
  },
};

module.exports = nextConfig;
