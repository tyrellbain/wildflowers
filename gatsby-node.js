exports.createPages = async ({ actions: { createPage }, graphql }) => {
  const pages = await graphql(`
    {
      allPagesJson {
        edges {
          node {
            title
            slug
          }
        }
      }
    }
  `);

  if (pages.error) {
    console.error("Something went wrong!");
    return;
  }

  pages.data.allPagesJson.edges.forEach(page => {
    const {slug, title} = page.node;

    createPage({
      path: `/${slug}`,
      component: require.resolve(`./src/templates/${title}/${title}.js`),
      context: {
        slug: slug,
      },
    });
  });

  const galleries = await graphql(`
    {
      allTagsJson {
        edges {
          node {
            name
            slug
            asideCopy {
              location
              date
              photog
              photogLink
            }
          }
        }
      }
    }
  `);

  if (galleries.error) {
    console.error("Something went wrong!");
    return;
  }

  galleries.data.allTagsJson.edges.forEach(tag => {
    const {name, slug, asideCopy} = tag.node;

    createPage({
      path: `/gallery/${slug}/`,
      component: require.resolve(`./src/templates/Gallery/SingleGallery.js`),
      context: {
        name: name,
        slug: slug,
        asideCopy: asideCopy
      },
    });
  });


}
