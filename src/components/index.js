const context = require.context('./', true, /\.\/[^/]+\/index\.jsx$/);

context.keys().forEach(filePath => {
  // Remove the './' and './svg' from the object key
  const componentName = filePath.replace(/^.+\/([^/]+)\/index\.jsx/, '$1');
  module.exports[componentName] = context(filePath).default;
});
