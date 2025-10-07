/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "out",
  pageExtensions: ["tsx"],
  reactStrictMode: true,
  sassOptions: {
    prependData: `@use 'sass:math'; @import "@/styles/prepend.scss";`,
    logger: {
      warn: function (message) {
        console.warn(message);
      },
      debug: function (message) {
        console.log(message);
      },
    },
  },
  images: {
    domains: ["img.youtube.com"],
    loader: "custom",
    loaderFile: "./my-loader.ts",
  },
};

module.exports = nextConfig;
