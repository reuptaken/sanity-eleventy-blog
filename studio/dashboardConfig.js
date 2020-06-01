export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5ed51ca058c052eea0c15d2e',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-o5bkxmei',
                  apiId: 'd82357f9-7bf7-4081-b01b-1d48b59d4381'
                },
                {
                  buildHookId: '5ed51ca07ee67e730fbfe07a',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-kpo418qx',
                  apiId: '7738bbe2-4596-43ca-b40e-1a7a91587f7f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/reuptaken/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-kpo418qx.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
