export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ffdef77c2eb9901295ca04a',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-bcm8f4sm',
                  apiId: '10cec88b-e0e0-446c-97d2-57f44b1e9991'
                },
                {
                  buildHookId: '5ffdef77cf7ff600c097a654',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-c18sg258',
                  apiId: 'a05367a1-ed6b-49e8-9d2a-3158bd971750'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/windinho/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-c18sg258.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
