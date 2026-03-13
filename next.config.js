/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['res.cloudinary.com'],
  },
  transpilePackages: ['next-tinacms-cloudinary'],
  experimental: { serverActions: true },
}

module.exports = nextConfig
