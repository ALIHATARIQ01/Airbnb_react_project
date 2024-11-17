import React, { useState } from 'react';

const BookingPage = () => {
  const [formData, setFormData] = useState({ checkIn: '', checkOut: '' });

  const handleSubmit = () => {
    fetch('http://localhost:5000/api/bookings', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => alert('Booking Successful!'))
      .catch((error) => console.error('Error submitting booking:', error));
  };

  return (
    <div>
      <h1>Book Your Stay</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <input
          type="date"
          placeholder="Check-in"
          value={formData.checkIn}
          onChange={(e) => setFormData({ ...formData, checkIn: e.target.value })}
        />
        <input
          type="date"
          placeholder="Check-out"
          value={formData.checkOut}
          onChange={(e) => setFormData({ ...formData, checkOut: e.target.value })}
        />
        <button type="submit">Book Now</button>
      </form>
    </div>
  );
};

export default BookingPage;
