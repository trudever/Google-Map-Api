const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

module.exports = function expressApp(routes) {
	const app = express()

	app.use(bodyParser.urlencoded({ extended: false }))
	app.use(bodyParser.json())

	app.use(cors())
	// app.use(function (req, res, next) {
	// 	res.header(
	// 		'Access-Control-Allow-Headers',
	// 		'x-access-token, Origin, Content-Type, Accept'
	// 	)
	// 	next()
	// })

	app.use('/api', routes)

	return app
}
