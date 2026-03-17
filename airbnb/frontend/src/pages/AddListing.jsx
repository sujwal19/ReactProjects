import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const server = "http://localhost:5000/api/listings";

const AddListing = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
  });

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

      const res = await axios.post(server, formData, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      console.log(res.data);
      setFormData({ title: "", description: "", price: "" });
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
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
        <button>Add Listing</button>
      </form>
    </div>
  );
};

export default AddListing;
