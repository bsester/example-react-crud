const express = require('express');
const app = express();
const port = 3001;
const mysql = require('mysql2');
const cors = require('cors');

app.use(cors());
app.use(express.json);

const db = mysql.createConnection(
    {
        user: 'root',
        host: 'localhost',
        password: 'bananas16',
        database: 'employeeSystem'
    }
);

app.post('/create', (req, res) =>
{
    const name = req.body.name;
    const age = req.body.age;
    const position = req.body.position;
    const country = req.body.country;
    const wage = req.body.wage;

    db.query('INSERT INTO employees (name, age, country, position, wage) VALUES (?,?,?,?,?)',
        [name, age, country, position, wage], (err, result) =>
        {
            if (err)
                console.log(err);
            else
                res.send('values inserted!');
        });
})


app.listen(port, () =>
{
    console.log("Server running on port " + port);
});