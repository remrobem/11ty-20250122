const matter = require('gray-matter');

module.exports = function (eleventyConfig) {
  // Add support for parsing frontmatter
  eleventyConfig.setFrontMatterParsingOptions({
    excerpt: true,
    excerpt_separator: '<!-- excerpt -->',
  });

  // Watch content directory for changes
  eleventyConfig.addWatchTarget('./content/');

  // Add events collection
  eleventyConfig.addCollection('events', function (collectionApi) {
    return collectionApi
      .getFilteredByGlob('content/events/*.md')
      .sort((a, b) => {
        return new Date(a.data.date) - new Date(b.data.date);
      });
  });

  // Add date filter for formatting dates
  eleventyConfig.addFilter('date', function (date, format) {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  });

  // Add limit filter for arrays
  eleventyConfig.addFilter('limit', function (array, limit) {
    return array.slice(0, limit);
  });

  return {
    dir: {
      input: 'content',
      includes: '../_includes',
      data: '../_data',
      output: '_site',
    },
  };
};
const matter = require('gray-matter');

module.exports = function (eleventyConfig) {
  // Add support for parsing frontmatter
  eleventyConfig.setFrontMatterParsingOptions({
    excerpt: true,
    excerpt_separator: '<!-- excerpt -->',
  });

  // Watch content directory for changes
  eleventyConfig.addWatchTarget('./content/');

  // Add events collection
  eleventyConfig.addCollection('events', function (collectionApi) {
    return collectionApi
      .getFilteredByGlob('content/events/*.md')
      .sort((a, b) => {
        return new Date(a.data.date) - new Date(b.data.date);
      });
  });

  // Add date filter for formatting dates
  eleventyConfig.addFilter('date', function (date, format) {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  });

  // Add limit filter for arrays
  eleventyConfig.addFilter('limit', function (array, limit) {
    return array.slice(0, limit);
  });

  return {
    dir: {
      input: 'content',
      includes: '../_includes',
      data: '../_data',
      output: '_site',
    },
  };
};
