import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(false);

  const getListings = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`http://localhost:5000/api/listings`);
      setListings(res.data.data);
    } catch (err) {
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getListings();
  }, []);

  return (
    <div>
      <h1>AirBnB Listings</h1>

      {loading ? <h2>Loading...</h2> : ""}
      <div className="listing-container">
        {listings.map((listing) => (
          <div key={listing._id}>
            <h3>{listing.title}</h3>
            <p>{listing.description}</p>
            <p>${listing.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
