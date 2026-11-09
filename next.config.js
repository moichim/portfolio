/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",
  // distDir: "out",
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
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.youtube.com",
      },
    ],
    loader: "custom",
    loaderFile: "./my-loader.ts",
  },
  experimental: {
    agentUpgrade: "latest",
  },
  async redirects() {
    return [{
      source: "/cerrynt",
      destination: "/projects/blik/cerrynt-pilsen",
      permanent: true,
    }]
  }
};

module.exports = nextConfig;
