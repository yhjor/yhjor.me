module.exports = {
  build: {
    postcss: [require('postcss-cssnext')()]
  },
  plugins: [{ src: '~plugins/ga.js', ssr: false }],
  head: {
    title: 'George Jor | Software Engineer | Hong Kong',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    link: [
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: '//rsms.me/interface/interface.css'
      },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href:
          '//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.13/components/icon.min.css'
      },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href:
          '//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.13/components/popup.min.css'
      },
      {
        rel: 'icon',
        type: 'image/jpeg',
        href: '/profile.jpg'
      }
    ]
  }
}
