const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

const nextConfig = {
  webpack: (config, { isServer }) => {
    if (isServer) {
      require('./scripts/generate-sitemap');
    }
    return config;
  },
};

module.exports = withPlugins(
  [optimizedImages, { handleImages: ['jpeg', 'png'] }],
  nextConfig
);
