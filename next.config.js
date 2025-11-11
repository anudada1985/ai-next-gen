/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ["via.placeholder.com", "firebasestorage.googleapis.com"],
  },
};

export default nextConfig;
