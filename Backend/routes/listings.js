const express = require('express');
const router = express.Router();
const listings = require('../data/listings.json');

// Get all listings
router.get('/', (req, res) => {
  res.json(listings);
});

// Get listing by ID
router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const listing = listings.find((item) => item.id === id);

  if (listing) {
    res.json(listing);
  } else {
    res.status(404).json({ error: 'Listing not found' });
  }
});

// Search listings
router.get('/search', (req, res) => {
  const query = req.query.query.toLowerCase();
  const filteredListings = listings.filter((item) =>
    item.location.toLowerCase().includes(query)
  );

  res.json(filteredListings);
});

module.exports = router;
