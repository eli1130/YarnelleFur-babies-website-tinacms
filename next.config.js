/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['f005.backblazeb2.com'],
  },
  transpilePackages: ['next-tinacms-s3'],
  experimental: { serverActions: true },
}

module.exports = nextConfig
