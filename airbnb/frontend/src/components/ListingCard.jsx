const ListingCard = ({ listing }) => {
  return (
    <div className="listing-card">
      <h3>{listing.title}</h3>
      <p>{listing.description}</p>
      <p>${listing.price}</p>
      <p>{listing.host ? listing.host.name : "Unknown"}</p>
    </div>
  );
};

export default ListingCard;
