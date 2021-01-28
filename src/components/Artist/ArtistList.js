import React, { useEffect, useState } from "react";
import ArtistCard from "./ArtistCard";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  

}));

export default function Artists(props) {
  const [user, setUser] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    const getUser = async () => {
      const response = await fetch("https://ttp-art-store.herokuapp.com/users");
      const data = await response.json();
      setUser(data);
    };
    getUser();
  }, []);

  //console.log(user);

  return (
    <div>
      <div className="Artist-list">
        <div className="artists">
          <div className="Artist-Page">
            <GridList cellHeight={500} className={classes.gridList} cols={3}>
              {user.map((users) => {
                //console.log(users.username)
                return (
                  <GridListTile>
                    <ArtistCard
                      name={users.name}
                      id={users.id}
                      blurb={users.blurb}
                      imageUrl={users.avatar && users.avatar.url}
                    />
                  </GridListTile>
                );
              })}
            </GridList>
          </div>
        </div>
      </div>
    </div>
  );
}
