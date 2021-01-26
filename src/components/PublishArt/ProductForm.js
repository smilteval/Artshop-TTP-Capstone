import React, { useState, useRef, useEffect } from "react";

export default function ProductForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [file, setFile] = useState(null);
  const [imagePreview, setImagePreview] = useState();

  useEffect(() => {
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setImagePreview(null);
    }
  }, [file]);

  //sending form data to Strapi
  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append(
      "data",
      JSON.stringify({ title, description, price, category })
    );
    formData.append("files.image", file);

    const response = await fetch(
      "https://ttp-art-store.herokuapp.com/products",
      {
        method: "POST",
        body: formData,
      }
    );
    const data = await response.json();

    console.log("data", data);
  };

  return (
    <div>
      <h2>Create a Product</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <input
          type="text"
          placeholder="description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        <input
          type="number"
          placeholder="price"
          value={price}
          onChange={(event) => setPrice(event.target.value)}
        />
        <div id="category-selection-panel">
          <select
            name="categories"
            onChange={(event) => setCategory(event.target.value)}
          >
            <option value=" " selected disabled hidden>
              {" "}
              Categories{" "}
            </option>
            <option value="Paintings">Paintings</option>
            <option value="Photography">Photography</option>
          </select>
        </div>

        <input
          type="file"
          placeholder="Add a file"
          onChange={(event) => setFile(event.target.files[0])}
        />
<br/>
        <img src={imagePreview} />
        <button>Submit</button>
      </form>
    </div>
  );
}
