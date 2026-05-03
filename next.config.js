/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/NEBO',
  assetPrefix: '/NEBO',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
