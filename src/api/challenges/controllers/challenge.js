'use strict';

/**
 *  challenges controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::challenges.challenge');
