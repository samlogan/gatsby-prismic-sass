module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
  title: 'Example title for SEO', // Default Site Title used for PWA
  description: 'Example description for SEO',
  headline: 'Snappy headline', // Headline for schema.org JSONLD
  siteLanguage: 'en', // Language Tag on <html> element
  banner: '/logos/logo-1024.jpg', // Default OpenGraph image
  ogLanguage: 'en_US', // Facebook Language

  // JSONLD / Manifest
  favicon: 'src/favicon.png', // Used for manifest favicon generation
  shortName: 'PWA Name', // shortname for manifest. MUST be shorter than 12 characters
  author: 'PWA Author', // Author for schemaORGJSONLD
  themeColor: '#f0ad4e',
  backgroundColor: '#13191E',

  twitter: '', // Twitter Username
  facebook: '', // Facebook Site Name
  googleTagManagerId: '',
};
