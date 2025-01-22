const matter = require('gray-matter');

module.exports = function (eleventyConfig) {
  // Watch the content directory for changes during development
  // This enables live reloading when content files are modified
  eleventyConfig.addWatchTarget('./content/');

  // Configure frontmatter parsing options for markdown files
  // This allows us to extract excerpts and properly handle the metadata
  eleventyConfig.setFrontMatterParsingOptions({
    excerpt: true,
    excerpt_separator: '<!-- excerpt -->',
  });

  // Create a collection for events
  // This gathers all markdown files from the events directory and sorts them by date
  eleventyConfig.addCollection('events', function (collectionApi) {
    return collectionApi
      .getFilteredByGlob('content/events/*.md')
      .sort((a, b) => {
        return new Date(a.data.date) - new Date(b.data.date);
      });
  });

  // Add a date formatting filter for use in templates
  // This makes dates display in a reader-friendly format
  eleventyConfig.addFilter('date', function (date) {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  });

  // Add a filter to limit array length
  // This is used for showing a specific number of events on the homepage
  eleventyConfig.addFilter('limit', function (array, limit) {
    return array.slice(0, limit);
  });

  // Configure permalinks for all pages
  // This ensures the index page appears at the site root
  eleventyConfig.addGlobalData('permalink', () => {
    return (data) => {
      // Special handling for index page to put it at site root
      if (data.page.fileSlug === '') {
        return '/';
      }
      // Regular pages get their directory-based URL
      return `/${data.page.fileSlug}/`;
    };
  });

  // Configure static asset handling
  // This copies images and other assets to the output directory
  eleventyConfig.addPassthroughCopy('content/images');

  // Add logging for HTML file processing
  // This helps track which files are being generated
  eleventyConfig.addTransform('processHtml', function (content, outputPath) {
    if (outputPath && outputPath.endsWith('.html')) {
      console.log(`Processing HTML file: ${outputPath}`);
    }
    return content;
  });

  // Return the main configuration object
  return {
    dir: {
      // Set the base directory for all content
      input: 'content',
      // Set the directory for layouts and includes
      includes: '../_includes',
      // Set the directory for data files
      data: '../_data',
      // Set the output directory for the built site
      output: '_site',
    },
    // Configure which file types to process
    templateFormats: [
      'md', // Process markdown files
      'njk', // Process Nunjucks templates
      'html', // Process HTML files
    ],
    // Set Nunjucks as the processor for different file types
    markdownTemplateEngine: 'njk', // Use Nunjucks for markdown files
    htmlTemplateEngine: 'njk', // Use Nunjucks for HTML files
    dataTemplateEngine: 'njk', // Use Nunjucks for data files

    // Configure markdown processing options
    markdownOptions: {
      html: true, // Allow HTML in markdown
      breaks: true, // Convert line breaks to <br>
      linkify: true, // Convert URL-like text to links
    },
  };
};
