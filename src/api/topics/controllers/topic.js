'use strict';

/**
 *  topics controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::topics.topic');
