const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

// Log the current working directory
console.log('Current working directory:', process.cwd());

// Middleware
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../'))); // Serve static files from the parent directory

// Serve the index.html file at the root URL
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html')); // Corrected path to point to the index.html in the parent directory
});

// Initialize SQLite database
const db = new sqlite3.Database('./items.db', (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Connected to the SQLite database.');
});

// Create items table if it doesn't exist
db.run(`CREATE TABLE IF NOT EXISTS items (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    width REAL,
    height REAL,
    depth REAL,
    weight REAL,
    amount INTEGER
)`);

// Endpoint to add an item
app.post('/api/items', (req, res) => {
    const { name, width, height, depth, weight, amount } = req.body;
    db.run(`INSERT INTO items (name, width, height, depth, weight, amount) VALUES (?, ?, ?, ?, ?, ?)`, 
        [name, width, height, depth, weight, amount], 
        function(err) {
            if (err) {
                return res.status(400).send(err.message);
            }
            res.status(201).json({ id: this.lastID });
        });
});

// Endpoint to get all items
app.get('/api/items', (req, res) => {
    db.all(`SELECT * FROM items`, [], (err, rows) => {
        if (err) {
            return res.status(400).send(err.message);
        }
        res.json(rows);
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
}); 
