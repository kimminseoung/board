const express = require('express');
const app = express();
const PORT = process.env.port || 8000;
const bodyParser = require('body-parser');
const { urlencoded } = require('body-parser');
const cors = require("cors");
const mysql = require('mysql');
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456",
    database: "board",
});
// db.connect();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/api/get", (req, res)=>{
    const sqlQuery = "SELECT * FROM myboard";
    db.query(sqlQuery, (err, result)=>{
        res.send(result);
    })
})
app.post("/api/insert", (req, res) => {
    const title = req.body.title;
    const content = req.body.content;
    const sqlQuery = "INSERT INTO myboard (title, content) VALUES (?,?)";
    db.query(sqlQuery, [title, content], (err, result) => {
        res.send('success!');
    });
});
// db.end();
app.listen(PORT, ()=>{
    console.log(`running on port ${PORT}`);
});
