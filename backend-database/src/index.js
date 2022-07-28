const express = require('./services/express')
const routes = require('./routes')

const PORT = process.env.PORT || 8000

const server = express(routes)

server.listen(PORT, () => {
	console.log(`Server is running on PORT: ${PORT}`)
})
