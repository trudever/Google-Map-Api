'use strict'

module.exports = {
	async up(queryInterface, Sequelize) {
		return queryInterface.createTable('temples', {
			id: {
				type: Sequelize.INTEGER,
				autoIncrement: true,
				primaryKey: true,
			},
			name: {
				type: Sequelize.STRING,
			},
			business_status: {
				type: Sequelize.STRING,
			},
			photo: {
				type: Sequelize.STRING,
			},
			phone: {
				type: Sequelize.STRING,
			},
			location_link: {
				type: Sequelize.STRING,
			},
			full_address: {
				type: Sequelize.STRING,
			},
			city: {
				type: Sequelize.STRING
			},
			state: {
				type: Sequelize.STRING,
			},
			site: {
				type: Sequelize.STRING,
			},
			email_1: {
				type: Sequelize.STRING,
			},
			email_2: {
				type: Sequelize.STRING,
			},
			email_3: {
				type: Sequelize.STRING,
			},
			youtube: {
				type: Sequelize.STRING,
			},
			twitter: {
				type: Sequelize.STRING,
			},
			facebook: {
				type: Sequelize.STRING,
			},
			goto: {
				type: Sequelize.STRING,
			},
			latitude: {
				type: Sequelize.STRING,
			},
			longitude: {
				type: Sequelize.STRING,
			},
		})
	},

	async down(queryInterface, Sequelize) {
		return queryInterface.dropTable('temples')
	},
}
