import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./ListingDetails.css";

function ListingDetails() {
  const { id } = useParams();
  const [listing, setListing] = useState(null);

  useEffect(() => {
    fetch(`/api/listings/${id}`)
      .then((res) => res.json())
      .then((data) => setListing(data))
      .catch((err) => console.error("Error fetching listing:", err));
  }, [id]);

  if (!listing) return <p>Loading...</p>;

  return (
    <div className="listing-details">
      <h2>{listing.title}</h2>
      <img src={listing.images[0]} alt={listing.title} />
      <p>Type: {listing.type}</p>
      <p>Amenities: {listing.amenities.join(", ")}</p>
      <p>Guests: {listing.guestCapacity}</p>
      <p>Bedrooms: {listing.bedrooms}</p>
      <p>Bathrooms: {listing.bathrooms}</p>
      <p>Price per night: ${listing.pricePerNight}</p>
      <Link to={`/book/${id}`} className="book-now">
        Book Now
      </Link>
    </div>
  );
}

export default ListingDetails;
