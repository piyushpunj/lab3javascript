// Import express
const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

let data = require('./data/data.json');

// Create (POST) operation
app.post('/data', (req, res) => {
    const newObject = req.body;
    data.push(newObject);
    res.status(201).send(newObject);
});

// Read (GET) operation - handled in file2.js

// Update (PUT) operation
app.put('/data/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const updatedObject = req.body;
    let objectFound = false;

    data = data.map(obj => {
        if (obj.id === id) {
            objectFound = true;
            return { ...obj, ...updatedObject };
        }
        return obj;
    });

    if (objectFound) {
        res.send(updatedObject);
    } else {
        res.status(404).send({ message: "Object not found" });
    }
});

// Delete (DELETE) operation
app.delete('/data/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const initialLength = data.length;
    data = data.filter(obj => obj.id !== id);

    if (data.length < initialLength) {
        res.send({ message: "Object deleted" });
    } else {
        res.status(404).send({ message: "Object not found" });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
