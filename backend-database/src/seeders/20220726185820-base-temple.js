'use strict';
const db = require('../models');
const Temple = db.Temple;

module.exports = {
  async up(queryInterface, Sequelize) {
    const templeData = require('../store/baseTemple.json');
    for (let item of templeData) {
      await Temple.create({
        name: item.name,
        business_status: item.business_status,
        photo: item.photo,
        phone: item.phone,
        location_link: item.location_link,
        full_address: item.full_address,
        city: item.city,
        state: item.state,
        country: 'United States',
        site: item.site,
        email_1: item.email_1,
        email_2: item.email_2,
        email_3: item.email_3,
        youtube: item.youtube,
        twitter: item.twitter,
        facebook: item.facebook,
        goto: item.goto,
        latitude: item.latitude,
        longitude: item.longitude,
      });
    }
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
