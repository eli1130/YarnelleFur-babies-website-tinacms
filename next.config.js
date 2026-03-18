/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'res.cloudinary.com',
      'pub-e847384c23164145a930ab957dbde017.r2.dev',
      'yarnelle-fur-babies.c1af431a9062578c7d188fc2e15d738f.r2.cloudflarestorage.com'
    ],
  },
  transpilePackages: ['next-tinacms-s3'],
  experimental: { serverActions: true },
}

module.exports = nextConfig
