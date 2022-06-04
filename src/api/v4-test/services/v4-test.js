'use strict';

/**
 * v4-test service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::v4-test.v4-test');
