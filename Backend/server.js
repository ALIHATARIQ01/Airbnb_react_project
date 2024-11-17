const express = require('express');
const listingsRoutes = require('./routes/listings');
const bookingsRoutes = require('./routes/bookings');

const app = express();
const PORT = 5000;

// Middleware
app.use(express.json()); // For parsing JSON requests

// Routes
app.use('/api/listings', listingsRoutes);
app.use('/api/bookings', bookingsRoutes);

// Default route
app.get('/', (req, res) => {
  res.send('Backend for Airbnb-inspired project is running!');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});








// import express from 'express';
// import path from 'path';
// import fs from 'fs';
// import cors from 'cors';

// const app = express();
// const port = 5000;

// // Enable CORS for cross-origin requests (especially if frontend and backend are on different ports)
// app.use(cors());

// // Route to serve listings (API route)
// app.get('/api/listings', (req, res) => {
//   // Construct the absolute file path for the listing.json file
//   const filePath = path.join(process.cwd(), 'Backend', 'data', 'listing.json');
//   // Read the JSON file
//   fs.readFile(filePath, 'utf-8', (err, data) => {
//     if (err) {
//       console.error('Error reading the file:', err);
//       return res.status(500).json({ error: 'Failed to read listings file' });
//     }

//     try {
//       const listings = JSON.parse(data); // Parse the JSON data
//       res.json(listings); // Send JSON response
//     } catch (parseError) {
//       console.error('Error parsing the JSON:', parseError);
//       return res.status(500).json({ error: 'Failed to parse listings JSON' });
//     }
//   });
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });
