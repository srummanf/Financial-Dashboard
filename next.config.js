/** @type {import('next').NextConfig} */
const nextConfig = {
    "baseUrl": ".",
    paths: {
        "@/app/*": ["app/*"]
    }
};

module.exports = nextConfig;
