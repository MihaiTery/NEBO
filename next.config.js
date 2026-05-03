/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/NEBO',
  assetPrefix: '/NEBO',
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: '/NEBO',
  },
}

module.exports = nextConfig
