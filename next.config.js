/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
        return [{
            source: '/:path*',
            headers: [
                {
                    key: "x-custom-header",
                    value: "my custom header value"
                }
            ]
        }]
    }
}

module.exports = nextConfig