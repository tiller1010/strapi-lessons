'use strict';

/**
 * levels router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::levels.level')
// module.exports = createCoreRouter('api::levels.level', {
//   only: ['find', 'findOne'],
//   config: {
//     find: {
//       auth: false
//     },
//     findOne: {
//       auth: false
//     }
//   }
// });
