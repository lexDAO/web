/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // images config
  images: {
    loader: "default",
    domains: ['cdn.discordapp.com', "localhost", "api.lexdao.coop"],
  },
}

module.exports = nextConfig
