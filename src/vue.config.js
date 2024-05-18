import vuetify from 'vite-plugin-vuetify'

module.exports = {
  plugins: [
    vue(),
    vuetify({ autoImport: true }), // Enabled by default
  ],
  devServer: {
    proxy: {
      "/api/": {
        target: "http://localhost:8080",
      }
    }
  }
};