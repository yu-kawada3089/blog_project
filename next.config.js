/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    domains: ["source.unsplash.com", "images.microcms-assets.io"],
  },

  async rewrites() {
    return [
      {
        source: "/blog/blog-detail",
        destination: "/blog-detail",
      },
    ];
  },
};

module.exports = nextConfig;
