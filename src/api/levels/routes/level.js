'use strict';

/**
 * levels router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::levels.level', {
  config: {
    find: {
      auth: false
    },
    findOne: {
      auth: false
    }
  }
});
