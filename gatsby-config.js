module.exports = {
  siteMetadata: {
    title: 'Code Notez',
    description: `A dumping ground of small useful code notes`,
    author: 'Jamie',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-code-notes',
      options: {
        contentPath: 'notes',
        basePath: '/',
        showThemeInfo: true,
        showDescriptionInSidebar: true,
      },
    },
  ],
}
