import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./BookingPage.css";

function BookingPage() {
  const { id } = useParams();
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [message, setMessage] = useState("");

  const handleBooking = (e) => {
    e.preventDefault();
    if (!checkIn || !checkOut) {
      setMessage("Please enter both check-in and check-out dates.");
      return;
    }

    // Mock booking confirmation
    fetch("/api/bookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ listingId: id, checkIn, checkOut }),
    })
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((err) => console.error("Error making booking:", err));
  };

  return (
    <div className="booking-page">
      <h2>Book Your Stay</h2>
      <form onSubmit={handleBooking}>
        <label>Check-in Date:</label>
        <input type="date" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} required />
        
        <label>Check-out Date:</label>
        <input type="date" value={checkOut} onChange={(e) => setCheckOut(e.target.value)} required />
        
        <button type="submit">Confirm Booking</button>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  );
}

export default BookingPage;
