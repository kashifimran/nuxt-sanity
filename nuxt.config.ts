export default {
  modules: ["@nuxtjs/sanity"],
  buildModules: [
    '@nuxt/postcss8',
  ],
  sanity: {
    projectId: '',
    apiVersion: '2023-02-02',
    dataset: 'dev',
    useCdn: false,
  },
  css: ["@/assets/css/main.css"],
  nitro: {
    preset: 'vercel-edge',
  },
  build: {
    postcss: {
      plugins: {
        autoprefixer: {},
        'postcss-advanced-variables': {},
        'postcss-for': {},
        'postcss-hexrgba': {},
        'postcss-import': {},
        'postcss-nested': {},
        'postcss-simple-vars': {},
        tailwindcss: {},
        'tailwindcss/nesting': {},
      },
    },
  }
};
