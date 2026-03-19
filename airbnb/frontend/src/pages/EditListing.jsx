import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import ListingCard from "../components/ListingCard";

const EditListing = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(false);

  const getListing = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`http://localhost:5000/api/listings/${id}`);
      setListing(res.data.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getListing();
  }, [id]);

  const user = JSON.parse(localStorage.getItem("user"));
  const token = localStorage.getItem("token");

  const owner =
    listing && listing.host && user ? listing.host._id === user.id : false;

  console.log(owner);

  if (loading) return <h2>Loading...</h2>;
  if (!listing) return <h2>Listing not found</h2>;

  return (
    <div>
      <Link>Back to Home</Link>
      <ListingCard listing={listing} />
    </div>
  );
};

export default EditListing;
