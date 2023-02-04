/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // 어떤 컴포넌트에서 테일윈드를 사용할지 설정
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
