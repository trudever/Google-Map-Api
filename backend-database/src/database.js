require('dotenv').config()

const mysql = require('mysql2')

// Open the connection to MySQL server
const connection = mysql.createConnection({
	host: process.env.DB_HOST,
	username: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
})

// Run create database statement
connection.query(
	`CREATE DATABASE IF NOT EXISTS ibaa_buddhist_directory`,
	function (err, results) {
		console.log(results)
		console.log(err)
	}
)

connection.end()
