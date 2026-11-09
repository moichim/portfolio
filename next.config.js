/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",
  // distDir: "out",
  pageExtensions: ["tsx"],
  reactStrictMode: true,
  // workerpool's browser build retains guarded Node-only imports.
  turbopack: {
    resolveAlias: {
      worker_threads: { browser: false },
      child_process: { browser: false },
      os: { browser: false },
    },
  },
  webpack(config, { isServer }) {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        worker_threads: false,
        child_process: false,
        os: false,
      };
    }
    return config;
  },
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
      destination: "/projects/blik/cerrynt",
      permanent: true,
    }, {
      source: "/projects/ntc/labir",
      destination: "/projects/labirthermal",
      permanent: true,
    }]
  }
};

module.exports = nextConfig;
