/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
            protocol:'https',
            hostname:"maps.googleapis.com" 
            },
            {
                protocol: 'https',
                hostname: 'www.trulia.com'
              },
            {
                protocol: 'https',
                hostname: 'media-cdn.trulia-local.com'
              },
    ]
    }
};

export default nextConfig;
