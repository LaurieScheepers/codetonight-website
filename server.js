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

// API endpoint to validate password and redirect (secure - no secrets exposed)
app.post('/api/validate-password', (req, res) => {
    const { password } = req.body;

    if (!password) {
        return res.status(400).json({
            success: false,
            message: 'Password is required'
        });
    }

    const correctPassword = process.env.MANIFESTO_PASSWORD;
    const manifestoUrl = process.env.MANIFESTO_URL;

    if (password === correctPassword) {
        // Return success without exposing the URL
        res.json({
            success: true,
            redirectUrl: '/api/redirect-to-manifesto' // Internal redirect endpoint
        });
    } else {
        res.status(401).json({
            success: false,
            message: 'Invalid password'
        });
    }
});

// Internal redirect endpoint (not exposed in network traffic)
app.get('/api/redirect-to-manifesto', (req, res) => {
    const manifestoUrl = process.env.MANIFESTO_URL;
    if (manifestoUrl) {
        res.redirect(manifestoUrl);
    } else {
        res.status(500).json({ error: 'Manifesto URL not configured' });
    }
});

// Serve the main HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/index_old.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index_old.html'));
});

// For local development
if (process.env.NODE_ENV !== 'production') {
    app.listen(PORT, () => {
        console.log(`🚀 CodeTonight server running on http://localhost:${PORT}`);
        console.log(`📁 Serving files from: ${__dirname}`);
        console.log(`🔐 Environment variables loaded: ${process.env.MANIFESTO_PASSWORD ? 'Password ✓' : 'Password ✗'}, ${process.env.MANIFESTO_URL ? 'URL ✓' : 'URL ✗'}`);
    });
}

// For Vercel serverless deployment
module.exports = app; 