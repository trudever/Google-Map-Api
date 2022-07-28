const Sequelize = require('sequelize')
const databaseConfig = require('../config/database_config.js')

const sequelizeInstance = new Sequelize(
	databaseConfig.database,
	databaseConfig.username,
	databaseConfig.password,
	{
		host: databaseConfig.host,
		dialect: databaseConfig.dialect,
		pool: {
			max: databaseConfig.pool.max,
			min: databaseConfig.pool.min,
			acquire: databaseConfig.pool.acquire,
			idle: databaseConfig.pool.idle,
		},
	}
)

const db = {}

db.Sequelize = Sequelize
db.sequelizeInstance = sequelizeInstance

db.Temple = require('./Temple.js')(sequelizeInstance, Sequelize)
module.exports = db
