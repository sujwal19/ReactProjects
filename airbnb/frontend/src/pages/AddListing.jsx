import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const server = "http://localhost:5000/api/listings";

const AddListing = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    image: null,
  });
  const [preview, setPreview] = useState(null);

  const fileHandler = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({ ...prev, image: file }));
    }
    const previewURL = URL.createObjectURL(file);
    setPreview(previewURL);
  };

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");

      if (!token) {
        alert("You must be logged in to add listing");
        return;
      }

      const data = new FormData();
      data.append("title", formData.title);
      data.append("description", formData.description);
      data.append("price", formData.price);

      if (formData.image) {
        data.append("image", formData.image);
      }

      const res = await axios.post(server, data, {
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(res.data);
      setFormData({ title: "", description: "", price: "", image: "" });
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <br />
      <Link>Back to Home</Link>
      <br />
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
        <button>Add Listing</button>
        {preview && (
          <div>
            <img
              src={preview}
              style={{ width: "auto", height: "200px" }}
              alt=""
            />
          </div>
        )}
      </form>
    </div>
  );
};

export default AddListing;
