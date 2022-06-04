'use strict';

/**
 * levels service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::levels.level');
