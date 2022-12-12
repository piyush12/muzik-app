/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "via.placeholder.com",
      "is2-ssl.mzstatic.com",
      "is1-ssl.mzstatic.com",
      "is4-ssl.mzstatic.com",
    ],
  },
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true,
  },
};

module.exports = nextConfig;
