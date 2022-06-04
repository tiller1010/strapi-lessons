'use strict';

/**
 * challenges router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::challenges.challenge')
// module.exports = createCoreRouter('api::challenges.challenge', {
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
