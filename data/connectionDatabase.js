import mysql from "mysql2"

const connection = mysql.createConnection({
host: "localhost",
user: "root",
password: "root",
database: "blogs",
});


connection.connect((err) => {
    if (err) {
        console.log(err);
    }
    console.log("Connected to mysql");
})



export default connection



