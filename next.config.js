/** @type {import('next').NextConfig} */



const nextConfig = {
    experimental: {
      serverActions: true,
    },
    images: {
      domains: ['kqtuairmtjpzrsidjvzp.supabase.co'],
    },
    
  };

module.exports = nextConfig
