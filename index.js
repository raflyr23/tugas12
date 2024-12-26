const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware untuk meng-parse query string
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Endpoint untuk operasi penjumlahan
app.get('/add', (req, res) => {
    const { a, b } = req.query;
    const result = parseFloat(a) + parseFloat(b);
    res.send(`Hasil Penjumlahan: ${result}`);
});

// Endpoint untuk operasi pengurangan
app.get('/subtract', (req, res) => {
    const { a, b } = req.query;
    const result = parseFloat(a) - parseFloat(b);
    res.send(`Hasil Pengurangan: ${result}`);
});

// Endpoint untuk operasi perkalian
app.get('/multiply', (req, res) => {
    const { a, b } = req.query;
    const result = parseFloat(a) * parseFloat(b);
    res.send(`Hasil Perkalian: ${result}`);
});

// Endpoint untuk operasi pembagian
app.get('/divide', (req, res) => {
    const { a, b } = req.query;
    if (b === '0') {
        res.send("Pembagian dengan 0 tidak valid.");
    } else {
        const result = parseFloat(a) / parseFloat(b);
        res.send(`Hasil Pembagian: ${result}`);
    }
});

// Menjalankan server
app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});
