// PostCSS configuration for Tailwind CSS
// This file lets Vite/PostCSS know to run Tailwind's plugin so that
// the `@tailwind` at-rules in your CSS are understood and expanded.
// Documentation: https://tailwindcss.com/docs/using-with-preprocessors#postcss

export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
