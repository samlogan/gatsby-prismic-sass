const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  // Get all pages
  const pages = await graphql(`
    {
      allPrismicPage {
        edges {
          node {
            id
            uid
          }
        }
      }
    }
  `);

  // Get all blog posts
  // const blogPosts = await graphql(`
  //   {
  //     allPrismicBlogPosts {
  //       edges {
  //         node {
  //           uid
  //         }
  //       }
  //     }
  //   }
  // `);

  // Templates
  const pageTemplate = path.resolve('src/templates/page.jsx');
  // const blogPostsTemplate = path.resolve('src/templates/blogpost.jsx');

  // GraphQL responses
  const pageList = pages.data.allPrismicPage.edges;
  // const blogPostsList = blogPosts.data.allPrismicBlogPosts.edges;

  // Loop through all pages and create a new page for each based on its uid
  if (!pageList.find(edge => edge.node.uid === 'home')) {
    throw Error('Create page with slug home');
  }
  pageList.forEach(edge => {
    createPage({
      path: `/${edge.node.uid === 'home' ? '' : edge.node.uid}`,
      component: pageTemplate,
      context: {
        uid: edge.node.uid,
      },
    });
  });

  // Loop through all blog posts and create a new page for each based on its uid
  // blogPostsList.forEach(edge => {
  //   createPage({
  //     path: `/${edge.node.uid}`,
  //     component: blogPostsTemplate,
  //     context: {
  //       uid: edge.node.uid,
  //     },
  //   });
  // });
};
