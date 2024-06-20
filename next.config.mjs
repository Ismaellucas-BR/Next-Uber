/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['earn.sng.link', 'www.uber-assets.com'], // Adicione todos os domínios externos necessários
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};

export default nextConfig;