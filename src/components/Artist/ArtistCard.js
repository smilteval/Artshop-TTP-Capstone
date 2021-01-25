import React from "react";
import AddCircleIcon from '@material-ui/icons/AddCircle';

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

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 350,
    maxHeight: 500,
  },
  media: {
    height: 0,
    paddingTop: "56.25%",
  },
  avatar: {
    backgroundColor: "#04364C",
  },
}));
// hello = () =>{
//   return (console.log("function was called"))
// }

export default function ArtistCard(props) {
  const { username, email,id} = props;

  const classes = useStyles();

  const formatImageUrl = (url) => `https://ttp-art-store.herokuapp.com${url}`;
  
console.log(username)
console.log(email)
console.log(id)

  return (
    <div className="Artist" style={{ margin: "10px" }}>
      <Card className={classes.root}>
        <CardHeader
          avatar={<Avatar  alt="Artist"  className={classes.large}></Avatar> }
          title={username}
          
        />
        {/* <CardMedia className={classes.media} image={formatImageUrl(imageUrl)} />  */}
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {"Blerb Of Artist"}
          </Typography>
        </CardContent>
        <CardActions>
          <IconButton>
            <AddCircleIcon  />
            Special Request
          </IconButton >


        </CardActions>
      </Card>
    </div>
  );
}
