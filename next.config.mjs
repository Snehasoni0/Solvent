/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbopackFileSystemCacheForDev: true,
    allowedDevOrigins: ["http://192.168.1.95:3000", "http://localhost:3000"],

    serverActions: {
      allowedOrigins: ["http://192.168.1.95:3000", "http://localhost:3000"],
    },
  },
};

export default nextConfig;
