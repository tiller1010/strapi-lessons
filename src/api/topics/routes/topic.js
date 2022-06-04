'use strict';

/**
 * topics router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::topics.topic');
// module.exports = createCoreRouter('api::topics.topic', {
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
