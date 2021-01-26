import React from "react";
import { addToCart } from '../Cart/Cart';
//cart fcn
import { product } from './ProductList';
// cart fcn
import {
  makeStyles,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Avatar,
  IconButton,
  Typography,
} from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import {Link} from "react-router-dom"

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%",
  },
  avatar: {
    backgroundColor: "#04364C",
  },
}));

export default function ProductCard(props) {
  let { title, description, imageUrl, createdAt, price, id } = props;

  const classes = useStyles();

  return (
    <div className="product-card" style={{ margin: "10px" }}>
      <Card className={classes.root}>
        <CardHeader
          avatar={<Avatar className={classes.avatar}> A </Avatar>}
          title={title}
          subheader={createdAt}
        />
        <Link to={`/products/${id}`}>
          <CardMedia className={classes.media} image={imageUrl} />
        </Link>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          <IconButton>
            <FavoriteIcon />
          </IconButton>
          <IconButton >
            {/* Click on the button to make it work */}
            {/* onClick={() => addToCart(product)} */}
            <AddShoppingCartIcon />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
}
