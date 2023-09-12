/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["tsx"],
  reactStrictMode: true,
  sassOptions: {
    // includePaths: [path.join(__dirname, 'styles')],
    prependData: `@import "@/styles/prepend.scss";`,
    logger: {
        warn: function (message) {
            console.warn(message)
        },
        debug: function (message) {
            console.log(message)
        }
    }
},
}

module.exports = nextConfig
