'use strict';

/**
 * topics router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::topics.topic', {
  config: {
    find: {
      auth: false
    },
    findOne: {
      auth: false
    }
  }
});
