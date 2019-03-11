require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const website = require('./config/website');

const pathPrefix = website.pathPrefix === '/' ? '' : website.pathPrefix;

const {
  IS_STAGING,
  SITE_URL,
  PRISMIC_REPO_NAME,
  API_KEY,
  NODE_ENV,
  gatsby_executing_command: GATSBY_CMD,
} = process.env;

// Robots txt warning on build
if (IS_STAGING && NODE_ENV !== 'development') {
  console.log('\x1b[41m%s\x1b[0m', 'blocking search engines, change IS_STAGING env variable to prevent this');
}
if (!IS_STAGING && NODE_ENV !== 'development') {
  console.log('\x1b[42m%s\x1b[0m', 'visible to search engines, change IS_STAGING env variable to prevent this');
}

// Env variable check
if (GATSBY_CMD !== 'serve') {
  const requiredEnvVariables = ['SITE_URL', 'PRISMIC_REPO_NAME', 'API_KEY'];
  requiredEnvVariables.map(item => {
    if (!process.env[item]) {
      throw Error(`Set ${item} env variable`);
    }
    return null;
  });
}

module.exports = {
  /* General Information */
  pathPrefix: website.pathPrefix,
  siteMetadata: {
    siteUrl: SITE_URL + pathPrefix,
    pathPrefix,
    title: website.title,
    description: website.description,
    banner: website.banner,
    headline: website.headline,
    siteLanguage: website.siteLanguage,
    ogLanguage: website.ogLanguage,
    author: website.author,
    twitter: website.twitter,
    facebook: website.facebook,
  },
  /* Plugins */
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: PRISMIC_REPO_NAME,
        accessToken: API_KEY,
        // Get the correct URLs in blog posts
        linkResolver: () => post => `/${post.uid}`,
      },
    },
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        data: '@import "resources.scss";',
        includePaths: ['src/sass/base'],
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: null,
        sitemap: null,
        configFile: IS_STAGING ? 'robots-txt.staging.js' : 'robots-txt.production.js',
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: website.googleTagManagerId,

        // Include GTM in development.
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,
        // Specify optional GTM environment details.
        // gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIROMENT_AUTH_STRING",
        // gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIROMENT_PREVIEW_NAME",
      },
    },
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: website.title,
        short_name: website.shortName,
        description: website.description,
        start_url: pathPrefix,
        background_color: website.backgroundColor,
        theme_color: website.themeColor,
        display: 'standalone',
        icon: website.favicon,
      },
    },
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: SITE_URL + pathPrefix,
      },
    },
    {
      resolve: 'gatsby-plugin-force-trailing-slashes',
      options: {
        excludedPaths: ['/404.html'],
      },
    },
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        output: '/sitemap.xml',
      },
    },
    // Must be placed at the end
    'gatsby-plugin-offline',
    'gatsby-plugin-brotli',
    'gatsby-plugin-netlify-cache',
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {}, // option to add more headers. `Link` headers are transformed by the below criteria
        allPageHeaders: [], // option to add headers for all pages. `Link` headers are transformed by the below criteria
        mergeSecurityHeaders: true, // boolean to turn off the default security headers
        mergeLinkHeaders: true, // boolean to turn off the default gatsby js headers (disabled by default, until gzip is fixed for server push)
        mergeCachingHeaders: true, // boolean to turn off the default caching headers
      },
    },
  ],
};
