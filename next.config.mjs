/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ['192.168.1.245'],
  // The case studies page was removed; send old links to the home page.
  async redirects() {
    return [{ source: '/gallery', destination: '/', permanent: false }];
  },
};

export default nextConfig;
