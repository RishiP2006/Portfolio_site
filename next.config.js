/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true // keep simple; allows remote images without config
  }
}
module.exports = nextConfig;
