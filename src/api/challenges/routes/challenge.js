'use strict';

/**
 * challenges router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::challenges.challenge', {
  config: {
    find: {
      auth: false
    }
  }
});
