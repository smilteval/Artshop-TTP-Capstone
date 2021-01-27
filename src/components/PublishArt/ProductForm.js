import React, { useState, useEffect, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import FilledInput from "@material-ui/core/FilledInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";

const categories = [
  {
    value: "Paintings",
    label: "Paintings",
  },
  {
    value: "Photography",
    label: "Photography",
  },
  {
    value: "Emoji Art",
    label: "Emoji Art",
  },
];

export default function ProductForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [imagePreview, setImagePreview] = useState("");
  const [image, setImage] = useState();

  const fileInputRef = useRef();

  //image preview
  useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(image);
    } else {
      setImagePreview(null);
    }
  }, [image]);

  //sending form data to Strapi
  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append(
      "data",
      JSON.stringify({ title, description, price, category })
    );
    formData.append("files.image", image);

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
    <div className="upload-art">
      <form onSubmit={handleSubmit} id="product-upload-form">
        <div id="product-image-upload">
          {imagePreview ? (
            <img id="product-photo-preview" src={imagePreview} />
          ) : (
            <button
              id="upload-photo-btn"
              onClick={(event) => {
                event.preventDefault();
                fileInputRef.current.click();
              }}
            >
              Please upload an image of your product
            </button>
          )}

          <input
            type="file"
            style={{ display: "none" }}
            ref={fileInputRef}
            accept="image/*"
            onChange={(event) => {
              const file = event.target.files[0];
              if (file && file.type.substr(0, 5) === "image") {
                setImage(file);
              } else {
                setImage(null);
              }
            }}
          />
        </div>
        <div id="product-info-upload">
          <TextField
            label="Title"
            variant="filled"
            required
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />

          <TextField
            label="Description"
            variant="filled"
            multiline
            rowsMax={5}
            rows={5}
            required
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />

          <FormControl fullWidth variant="filled">
            <InputLabel>Price*</InputLabel>
            <FilledInput
              type="number"
              required
              value={price}
              onChange={(event) => setPrice(event.target.value)}
              startAdornment={
                <InputAdornment position="start">$</InputAdornment>
              }
            />
          </FormControl>

          <TextField
            select
            required
            label="Art category"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            helperText="Please select one category"
            variant="filled"
          >
            {categories.map((option) => (
              <MenuItem value={option.value}>{option.label}</MenuItem>
            ))}
          </TextField>
        </div>
        <Button type="submit">Publish</Button>
      </form>
    </div>
  );
}
