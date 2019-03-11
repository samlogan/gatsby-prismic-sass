# Prismic Gatsby

Gatsby Starter which uses the Headless CMS [Prismic](https://prismic.io/).

## Features

- Prismic as Headless CMS
- Responsive images (gatsby-image)
  - The right image size for every screen size
  - Traced SVG Loading (Lazy-Loading)
  - WebP Support
- SEO
  - Sitemap
  - Canonical Tags
  - Schema.org JSONLD
  - OpenGraph Tags
  - Twitter Tags
  - Favicons
- Offline Support
- Brotli Compression
- WebApp Manifest Support
- Configurable
  - Use the `website.js` to easily change the most important information
  - Use `.env.template` to generate `.env.development` and `.env.production` files containing ENV variables

## Instructions

### Quick start guide

The easiest way to deploy this starter is to use the same setup, meaning that your Prismic repository is configured the same way as this starter. The rest of this README aims to explain exactly that. You can read through the instructions with this high-level overview in mind:

1. Clone and install the starter
2. Register an account on Prismic
3. Configure your custom types
4. Create an API key and store it in an ENV variable
5. Go to your content tab
6. Create new documents for the `Page` type and fill out every input field
7. Your project is ready for development and production

## Setup

You have to know the basics of Prismic's interface in order to be able to make the necessary changes / setup your project accordingly. You can also checkout the document ["Sourcing from Prismic"](https://www.gatsbyjs.org/docs/sourcing-from-prismic/).

### gatsby-config

#### repositoryName

Don't forget to change the default `repositoryName` in the plugin's option. The `repositoryName` is the name you have entered at the creation of the repository (you’ll also find it as the subdomain in the URL)

#### API key

You need to define the API Key for your Prismic repository in `gatsby-config.js` ([Video tutorial](https://www.youtube.com/watch?v=iH0P4KcOeVc)). You can retrieve the key here:

- You can generate an access token in the **API & Security** section of your repository settings. Setting a **Callback URL** is not necessary.
- The token will be listed under "Permanent access tokens".

It's best to store the API Key in an environment variable. Create the file `.env.development` in the root dir of your project. Its content should be:

`API_KEY=YOURKEYHERE`

If you deploy to Netlify you can also setup an environment variable.

More information on the source plugin: [gatsby-source-prismic](https://github.com/angeloashmore/gatsby-source-prismic)

## Development

**Before running the local development server you'll need to add content to your Prismic repository!**

**Please note**: You have to publish all these documents (not only saving them)!

After that you can run the local server:

```shell
npm run dev
```

### Adding new features/plugins

You can add other features by having a look at the official [plugins page](https://www.gatsbyjs.org/plugins/)

### Building your site

```shell
npm run build
```

Copy the content of the `public` folder to your webhost or use a website like Netlify which automates that for you.

## Configuration

You can configure your setup in `config/website`:

```JS
module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
  title: 'Gatsby Prismic', // Default Site Title used for PWA
  description: 'A unopinionated Gatsby Starter which uses the Headless CMS Prismic.',
  headline: 'Lean Gatsby Prismic starter', // Headline for schema.org JSONLD
  siteLanguage: 'en', // Language Tag on <html> element
  banner: '/logos/logo-1024.png', // Default OpenGraph image
  ogLanguage: 'en_US', // Facebook Language

  // JSONLD / Manifest
  favicon: 'src/favicon.png', // Used for manifest favicon generation
  shortName: 'Prismic', // shortname for manifest. MUST be shorter than 12 characters
  author: 'Company Name', // Author for schemaORGJSONLD
  themeColor: '#3D63AE',
  backgroundColor: '#EBEDF2',

  twitter: '', // Twitter Username
  facebook: '', // Facebook Site Name
  googleAnalyticsID: '',
}
