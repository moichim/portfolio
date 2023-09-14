/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ["tsx"],
    reactStrictMode: true,
    sassOptions: {
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
    images: {
        domains: ['img.youtube.com'],
    },
}

module.exports = nextConfig
