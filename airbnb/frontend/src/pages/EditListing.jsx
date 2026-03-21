import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import ListingCard from "../components/ListingCard";

const EditListing = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    image: null,
  });

  const [currentImage, setCurrentImage] = useState(null);
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    if (listing) {
      setFormData({
        title: listing.title || "",
        description: listing.description || "",
        price: listing.price || "",
        image: null,
      });
      setCurrentImage(listing.image || null);
      setPreview(null);
    }
  }, [listing]);

  const fileHandler = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({ ...prev, image: file }));
    }
    setPreview(URL.createObjectURL(file));
  };

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

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

  const removeImage = () => {
    setCurrentImage(null);
    setFormData((prev) => ({ ...prev, image: null }));
    setPreview(null);
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const data = new FormData();
      data.append("title", formData.title);
      data.append("description", formData.description);
      data.append("price", formData.price);

      if (!formData.image && !currentImage) {
        data.append("removeImage", "true");
      }

      if (formData.image) {
        data.append("image", formData.image);
      }

      await axios.put(`http://localhost:5000/api/listings/${id}`, data, {
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "multipart/form-data",
        },
      });

      alert("Listing updated successfully");
      navigate(`/listing/${id}`);
    } catch (err) {
      alert("Error updating listing");
    }
  };

  if (loading) return <h2>Loading...</h2>;
  if (!listing) return <h2>Listing not found</h2>;

  if (!owner) return <h2>You are not authorized to edit this listing</h2>;

  return (
    <div>
      <br />
      <Link to="/">Back to Home</Link>
      <br />
      <ListingCard listing={listing} />
      <br />
      <form onSubmit={submitHandler}>
        <input
          type="text"
          name="title"
          placeholder="Enter Title"
          onChange={inputHandler}
          value={formData.title}
        />
        <textarea
          name="description"
          placeholder="Enter Description"
          onChange={inputHandler}
          value={formData.description}
        />
        <input
          type="number"
          name="price"
          placeholder="Enter Price"
          onChange={inputHandler}
          value={formData.price}
        />
        <input
          type="file"
          onChange={fileHandler}
          name="image"
          accept="image/*"
        />
        {(preview || currentImage) && (
          <div>
            <img
              src={preview || currentImage}
              style={{ width: "200px", borderRadius: "8px" }}
            />
            <br />
            <button type="button" onClick={removeImage}>
              Remove Image
            </button>
          </div>
        )}
        <button type="submit">Update Listing</button>
      </form>
    </div>
  );
};

export default EditListing;
