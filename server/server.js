
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const router = require('./routes/router');

let dbconfig = require(__dirname+'/../server/config/db-config.json');
// const dbconfig = require(__dirname+'/../server/dbconnection.js');
let connection = mysql.createConnection(dbconfig);

const app = express();
const PORT = process.env.PORT || 3001;

const cors = require('cors');
app.use(cors())

app.use('/', express.static(__dirname + "/../public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/', router);

app.get('/projects', (req, res) =>{
	connection.query("SELECT * FROM projects", (err, rows) => {
		if(err) throw err;

		res.send(rows);
	});
});
const server = app.listen(PORT, () => {
	console.log(`Check out the app at http://localhost:${PORT}`);
});