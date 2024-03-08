/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bgOne': "url('https://www.pinkvilla.com/images/2024-01/1905888199_avatar-the-last-airbender-p.jp')",
        'bgTwo': "url('https://www.thenews.com.pk/assets/uploads/updates/2024-02-23/l_1160658_122027_updates.jpg')",
      }
    },
  },
  plugins: [],
}

