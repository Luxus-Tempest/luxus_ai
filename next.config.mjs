/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "wordpress-1305323-4752142.cloudwaysapps.com",
      },
      {
        protocol: 'https',
        hostname: 'ucarecdn.com',
      }
    ],
  },
};

export default nextConfig;
