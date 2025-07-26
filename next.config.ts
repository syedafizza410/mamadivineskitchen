import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        'screen-90': '90vh',
        'screen-80': '80vh',
        '128': '32rem',
        '144': '36rem',
        '150': '40rem',
      },
    },
  },
  plugins: [],
};

export default nextConfig;
