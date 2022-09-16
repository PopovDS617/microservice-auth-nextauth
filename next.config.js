/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    mongoDbPath:
      'mongodb+srv://popovds:65D89YtDGhkLeVzN@auth-cluster.j4s4vys.mongodb.net/?retryWrites=true&w=majority',
  },
};

module.exports = nextConfig;
