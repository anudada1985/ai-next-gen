/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Ensures optimized static export and compatibility with Vercel hosting
  images: {
    domains: ["via.placeholder.com", "firebasestorage.googleapis.com"],
  },

  // If you're using the /app directory, this is automatically supported in Next.js 14+
  experimental: {},

  // Optional: Enable SWC minification and Turbo mode for better build speed
  swcMinify: true,

  // Optional: If you ever use dynamic routes with static generation
  output: "standalone",
};

export default nextConfig;
