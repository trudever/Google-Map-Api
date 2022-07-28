module.exports = (sequelize, Sequelize) => {
	const Temple = sequelize.define(
		'temples',
		{
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
		},
		{
			timestamps: false,
		}
	)
	return Temple
}
