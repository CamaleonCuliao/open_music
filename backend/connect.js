let mysql = require('mysql');

let conexion = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    db: "openmusic"
});

conexion.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});