import React from "react";
import { addToCart } from "../Cart/AddToCart";
import  { useEffect, useState } from "react";
import { product } from "./ProductList";
// cart fcn
import {
  makeStyles,
  Card,
  Button,
  CardMedia,
  CardContent,
} from "@material-ui/core";

import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { Link } from "react-router-dom";
import { useCartContext } from '../../context/cart_context'




const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: "15vh",
    width: "15vw",
    paddingTop: "56.25%",
  },
  avatar: {
    backgroundColor: "#04364C",
  },
}));

export default function ProductCard(props) {
  
  const [product, setProduct] = useState([]);
  const {addToCart,removeItem} = useCartContext()
  
  
    const [amount, setAmount] = useState(1)


  let { title, imageUrl, price, id } = props;

  const classes = useStyles();
  useEffect(() => {
    const getProduct = async () => {
      const response = await fetch(
        `https://ttp-art-store.herokuapp.com/products/${id}`
      );
      const data = await response.json();
      setProduct(data);
    };
    getProduct();
  }, []);



  return (
    <div className="product-card" style={{ margin: "10px" }}>
      <Card className={classes.root}>
        <Link to={`/products/${id}`}>
          <CardMedia className={classes.media} image={imageUrl} />
        </Link>
        <b>
          <CardContent id="card-title">{title}</CardContent>
        </b>
        {/* TO DO: make the card title no more than 29 characters */}
        <div id="card-bottom">
          <CardContent id="card-price">${price.toFixed(2)}</CardContent>
          <Button id="card-cart-btn" onClick={() => addToCart(id, amount, product)} > 
            <AddShoppingCartIcon />
          </Button>
        </div>
      </Card>
    </div>
  );
}
