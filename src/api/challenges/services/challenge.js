'use strict';

/**
 * challenges service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::challenges.challenge');
