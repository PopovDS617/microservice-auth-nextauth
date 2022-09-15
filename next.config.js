/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    mongoUsername: 'popovds',
    mongoPassword: '65D89YtDGhkLeVzN',
  },
};

module.exports = nextConfig;
