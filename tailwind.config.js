/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  purge: ['./components/*.vue', './pages/*.vue', './pages/**/*.vue'],
  theme: {},
  variants: {},
  plugins: [require('@tailwindcss/ui')]
}
