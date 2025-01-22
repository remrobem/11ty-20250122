import { defineStackbitConfig } from '@stackbit/types';

export default defineStackbitConfig({
  stackbitVersion: '~0.6.0',
  ssgName: 'eleventy',
  nodeVersion: '16',

  contentSources: [
    {
      name: 'pages',
      sources: [
        {
          name: 'pages',
          location: 'content/pages',
          pattern: '**/*.md',
        },
      ],
    },
    {
      name: 'events',
      sources: [
        {
          name: 'events',
          location: 'content/events',
          pattern: '**/*.md',
        },
      ],
    },
  ],

  models: {
    page: {
      name: 'page',
      type: 'page',
      label: 'Page',
      fields: [
        {
          name: 'title',
          type: 'string',
          required: true,
          label: 'Title',
        },
        {
          name: 'layout',
          type: 'string',
          required: true,
          default: 'layouts/page.njk',
          label: 'Layout',
        },
        {
          name: 'hero_image',
          type: 'image',
          label: 'Hero Image',
        },
        {
          name: 'body',
          type: 'markdown',
          label: 'Content',
        },
      ],
    },
    event: {
      name: 'event',
      type: 'page',
      label: 'Event',
      fields: [
        {
          name: 'title',
          type: 'string',
          required: true,
          label: 'Event Title',
        },
        {
          name: 'date',
          type: 'date',
          required: true,
          label: 'Event Date',
        },
        {
          name: 'time',
          type: 'string',
          required: true,
          label: 'Event Time',
        },
        {
          name: 'location',
          type: 'string',
          required: true,
          label: 'Event Location',
        },
        {
          name: 'image',
          type: 'image',
          label: 'Event Image',
        },
        {
          name: 'body',
          type: 'markdown',
          label: 'Event Description',
        },
      ],
    },
  },

  assets: {
    referenceType: 'static',
    staticDir: 'content/images',
    uploadDir: 'content/images',
    publicPath: '/images',
  },
});
