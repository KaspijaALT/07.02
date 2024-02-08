import mysql from "mysql2";

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "pilgrimest"
});

db.connect((error) => {
    if (error) {
      console.log('Error connecting to the database:',error);
    } else {
      console.log('Connected to the database...');
    }
  });