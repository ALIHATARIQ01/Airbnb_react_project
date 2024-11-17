import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ListingDetailsPage = () => {
  const { id } = useParams();
  const [listing, setListing] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/listings/${id}`)
      .then((response) => response.json())
      .then((data) => setListing(data))
      .catch((error) => console.error('Error fetching listing:', error));
  }, [id]);

  if (!listing) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>{listing.title}</h1>
      <p>{listing.type}</p>
      <p>${listing.pricePerNight} per night</p>
      {/* Add more details here */}
    </div>
  );
};

export default ListingDetailsPage;
