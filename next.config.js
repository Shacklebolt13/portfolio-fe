const withMDX = require("@next/mdx")();
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include MDX files
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  // Optionally, add any other Next.js config below
  images: {
    domains: ["media.licdn.com", "play-lh.googleusercontent.com"],
  },
};

module.exports = withMDX(nextConfig);
