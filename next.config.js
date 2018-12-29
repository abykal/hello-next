module.exports = {
    exportPathMap: function () {
      return {
        '/': { page: '/' },
        '/about': { page: '/about' },
        '/b/hello-nextjs': { page: '/blog', query: { title: 'Hello Next.js' } },
        '/b/learn-nextjs': { page: '/blog', query: { title: 'Learn Next.js is awesome' } },
        '/b/deploy-nextjs': { page: '/blog', query: { title: 'Deploy apps with Zeit' } }
      }
    }