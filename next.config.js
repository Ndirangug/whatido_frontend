/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const withTM = require('next-transpile-modules')([
  '@mui/material',
  '@mui/system',
]);

module.exports = withBundleAnalyzer(
  withTM({
    reactStrictMode: true,
    swcMinify: true,
    images: {
      domains: ['donnysliststory.sfo3.cdn.digitaloceanspaces.com'],
    },
    experimental: {
      // Enables the styled-components SWC transform
      styledComponents: true,
    },
    webpack: (config) => {
      config.resolve.alias = {
        ...config.resolve.alias,
        '@mui/styled-engine': '@mui/styled-engine-sc',
      };
      return config;
    },
  })
);
