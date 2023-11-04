/** @type {import('next').NextConfig} */


module.exports = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'books.google.com',
            port: '',
            pathname: '/books/**',
          },
        ],
      },
}
