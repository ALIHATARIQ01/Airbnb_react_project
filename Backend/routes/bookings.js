const express = require('express');
const router = express.Router();

// Mock booking endpoint
router.post('/', (req, res) => {
  const bookingData = req.body;

  if (!bookingData || !bookingData.propertyId || !bookingData.user) {
    return res.status(400).json({ error: 'Invalid booking data' });
  }

  res.json({
    success: true,
    message: 'Booking created successfully',
    data: bookingData,
  });
});

module.exports = router;
















// const express = require("express");
// const router = express.Router();
// const listings = require("../data/listings.json");

// // Get all listings
// router.get("/listings", (req, res) => {
//   res.json(listings);
// });

// // Get listing by ID
// router.get("/listings/:id", (req, res) => {
//   const listing = listings.find(l => l.id === req.params.id);
//   if (listing) res.json(listing);
//   else res.status(404).send("Listing not found");
// });

// // Search listings by location
// router.get("/listings/search", (req, res) => {
//   const query = req.query.query.toLowerCase();
//   const results = listings.filter(l => l.location.toLowerCase().includes(query));
//   res.json(results);
// });

// // Mock booking endpoint
// router.post("/bookings", (req, res) => {
//   res.json({ message: "Booking created successfully!" });
// });

// module.exports = router;

