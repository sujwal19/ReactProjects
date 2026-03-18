import { useEffect, useState } from "react";
import axios from "axios";
import ListingCard from "../components/ListingCard";
import { Link } from "react-router-dom";

const Home = () => {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchInput, setSearchInput] = useState("");

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

  const searchSubmitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const searchQuery = searchInput.trim();
      const res = await axios.get(
        `http://localhost:5000/api/listings?q=${searchQuery}`,
      );
      setListings(res.data.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <h2>Loading...</h2>;

  //   function debounceTODO() {
  //   const fetchListings = async (query = "") => {
  //     setLoading(true);
  //     try {
  //       const res = await axios.get(
  //         `http://localhost:5000/api/listings?q=${query}`,
  //       );
  //       setListings(res.data.data);
  //     } catch (err) {
  //       console.error(err);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   const debounce = (func, delay) => {
  //     let timer;
  //     return (...args) => {
  //       clearTimeout(timer);
  //       timer = setTimeout(() => {
  //         func(...args);
  //       }, delay);
  //     };
  //   };

  //   const debouncedFetch = useCallback(debounce(fetchListings, 500), []);

  //   const handleChange = (e) => {
  //     const value = e.target.value;
  //     setSearchInput(value);
  //     debouncedFetch(value); // trigger search after 500ms
  //   };
  // }

  return (
    <div>
      <h1>AirBnB Listings</h1>

      <form style={{ display: "flex" }} onSubmit={searchSubmitHandler}>
        <input
          type="text"
          placeholder="Search Apartment..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button>Search</button>
      </form>

      <div className="listing-container">
        {listings.length === 0 ? (
          <h2>No result for search input "{searchInput}"</h2>
        ) : (
          listings.map((listing) => (
            <Link
              key={listing._id}
              to={`/listing/${listing._id}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <ListingCard key={listing._id} listing={listing} />
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
