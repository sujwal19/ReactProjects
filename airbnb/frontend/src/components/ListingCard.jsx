const ListingCard = ({ listing }) => {
  console.log(listing.image);

  return (
    <div className="listing-card">
      {listing.image && (
        <img style={{ height: "100px", width: "auto" }} src={listing.image} />
      )}
      <h3>{listing.title}</h3>
      <p>{listing.description}</p>
      <p>${listing.price}</p>
      <p>{listing.host ? listing.host.name : "Unknown"}</p>
    </div>
  );
};

export default ListingCard;
