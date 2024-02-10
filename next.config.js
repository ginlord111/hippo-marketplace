/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        pathname: "**",
        hostname: "localhost",
        port: "3000",
      },
    ],
  },
};

module.exports = nextConfig;