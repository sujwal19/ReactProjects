import { useState } from "react";

const AddListing = () => {
  const [formData, setFormData] = useState({
    name: "",
    desc: "",
    price: "",
  });

  //   const inputHandler = (e) => {
  //     setFormData(e.target.value);
  //   };

  return (
    <div>
      <form>
        <input type="text" name="title" placeholder="Enter Title" />
        <textarea
          type="text"
          name="description"
          placeholder="Enter Description"
          onChange={() => se}
        />
        <input type="number" name="price" placeholder="Enter Price" />
        <button>Add Listing</button>
      </form>
    </div>
  );
};

export default AddListing;
