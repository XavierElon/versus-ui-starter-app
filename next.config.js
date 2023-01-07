/** @type {import('next').NextConfig} */
/** @type {import('next').NextConfig} */
const nextConfig = {
   images: {
        //configure "edamam-product-images.s3.amazonaws.com" and google auth 
    domains: ['edamam-product-images.s3.amazonaws.com', "lh3.googleusercontent.com", "platform-lookaside.fbsbx.com"],
    minimumCacheTTL: 9999999,
      },
  eslint: {
    dirs: ['src'],
  },

  reactStrictMode: true,
  swcMinify: true,

  // Uncoment to add domain whitelist
  // images: {
  //   domains: [
  //     'res.cloudinary.com',
  //   ],
  // },

  // SVGR
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            typescript: true,
            icon: true,
          },
        },
      ],
    });

    return config;
  },
};

module.exports = nextConfig;
