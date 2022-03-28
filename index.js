const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();

//connecting to the database and checking for errors if any are present
const db = mysql.createConnection({
    host: 'us-cdbr-east-05.cleardb.net',
    user: 'b9414be449b6e1',
    password: '4a55747b',
    database: 'heroku_3adbd2446816101'
});

db.connect(err => {
    if (err) {
        return err;
    }
    console.log("Connection Successful")
})

app.use(cors());
app.use(express.json());

app.get("/api/products", (req, res) => {
    db.query(`SELECT * FROM products`, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result);
        };
    });
});

app.listen(4000, () => {
    console.log(`console server listening on port 4000`)
});