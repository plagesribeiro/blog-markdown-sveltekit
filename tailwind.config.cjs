const config = {
  mode: 'jit',
  purge: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            maxWidth: null,
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  daisyui: {
    themes: true,
  },
}

module.exports = config
