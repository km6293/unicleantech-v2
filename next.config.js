/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['www.unicleantech.co.kr'],
    unoptimized: true, // 개발 환경에서 이미지 최적화 비활성화
  },
};

module.exports = nextConfig; 