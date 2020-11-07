const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

const nextConfig = {
  webpack: (config, { isServer }) => {
    if (isServer) {
      require('./scripts/generate-sitemap');
    }
    return config;
  },
  images: {
    domains: ['cdn.sanity.io'],
  },
};

module.exports = withPlugins(
  [
    optimizedImages({
      responsive: {
        adapter: require('responsive-loader/sharp'),
      },
    }),
    { handleImages: ['jpeg', 'png'] },
  ],
  nextConfig
);
