require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql2');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

db.connect(err => {
    if (err) {
        console.error('DB connection failed:', err);
    } else {
        console.log('MySQL connected');
    }
});

app.post('/api/register', (req, res) => {
    const {
        firstName,
        lastName,
        jobTitle,
        company,
        mobileNumber,
        email,
        website
    } = req.body;

    const sql = `
        INSERT INTO registrations 
        (firstName, lastName, jobTitle, company, mobileNumber, email, website) 
        VALUES (?, ?, ?, ?, ?, ?, ?)
    `;

    db.query(sql, [firstName, lastName, jobTitle, company, mobileNumber, email, website], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Database error');
        }
        res.status(200).send('Registration successful');
    });
});
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log('Server running on port 5000');
});
