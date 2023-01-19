/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development'
})

module.exports = withPWA({
  // next.js config
  images:{
    domains: ["i.pinimg.com"]
  },
  reactStrictMode: true, 
})