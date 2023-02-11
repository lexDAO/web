/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // images config
  images: {
    domains: ['cdn.discordapp.com'],
  },
}

module.exports = nextConfig
