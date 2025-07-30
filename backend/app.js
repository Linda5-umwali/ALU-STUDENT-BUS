const express = require('express');
const axios = require('axios');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware to serve static files (the frontend files in 'public' folder)
app.use(express.static('public'));

// Simple API endpoint
app.get('/api/status', (req, res) => {
  res.json({ status: 'ALU Bus Service API is running!' });
});

// External API fetching route
app.get('/api/data', async (req, res) => {
  try {
    const response = await axios.get('https://api.mapbox.com/data');
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching API data:', error.message);
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});

// Fallback route to serve the main HTML file
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

app.get('/api/bus-location', (req, res) => {
  const simulatedLocation = {
    lng: 30.0604 + Math.random() * 0.01,
    lat: -1.9632 + Math.random() * 0.01
  };
  res.json(simulatedLocation);
});
