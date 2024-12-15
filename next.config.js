const withMDX = require("@next/mdx")();
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include MDX files
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  // Optionally, add any other Next.js config below
  images: {
    domains: [
      "media.licdn.com",
      "play-lh.googleusercontent.com",
      "img.freepik.com",
      "hacktronian.in",
      "www.scraping-bot.io",
      "www.calsoftinc.com",
      "www.wisbox.in",
      "fontawesome.com",
      "www.svgrepo.com",
      "www.braneenterprises.com"
    ],
    dangerouslyAllowSVG : true
  },
};

module.exports = withMDX(nextConfig);
