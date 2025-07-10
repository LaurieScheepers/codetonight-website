const express = require('express');
const path = require('path');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files from public directory

// API endpoint to get environment variables (for client-side use)
app.get('/api/config', (req, res) => {
    res.json({
        MANIFESTO_PASSWORD: process.env.MANIFESTO_PASSWORD,
        MANIFESTO_URL: process.env.MANIFESTO_URL
    });
});

// Serve the main HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/index_old.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'index_old.html'));
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 CodeTonight server running on http://localhost:${PORT}`);
    console.log(`📁 Serving files from: ${__dirname}`);
    console.log(`🔐 Environment variables loaded: ${process.env.MANIFESTO_PASSWORD ? 'Password ✓' : 'Password ✗'}, ${process.env.MANIFESTO_URL ? 'URL ✓' : 'URL ✗'}`);
}); 