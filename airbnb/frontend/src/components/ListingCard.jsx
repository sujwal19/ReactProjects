const ListingCard = ({ listing }) => {
  return (
    <div className="mb-4 h-100 overflow-hidden rounded-xl bg-white shadow-md hover:shadow-lg">
      {listing.image ? (
        <img
          className="h-60 w-full object-cover"
          alt={listing.title}
          src={listing.image}
        />
      ) : (
        <div className="flex h-60 w-full items-center justify-center bg-gray-200 text-gray-500">
          No Image
        </div>
      )}

      <div className="p-4">
        <h3 className="truncate text-lg font-bold text-gray-900">
          {listing.title}
        </h3>
        <p className="mt-1 line-clamp-2 text-sm text-gray-500">
          {listing.description}
        </p>
        <p className="mt-2 font-semibold text-red-500">${listing.price}</p>
        <p>{listing.host ? listing.host.name : "Unknown"}</p>
      </div>
    </div>
  );
};

export default ListingCard;
