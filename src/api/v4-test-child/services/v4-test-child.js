'use strict';

/**
 * v4-test-child service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::v4-test-child.v4-test-child');
