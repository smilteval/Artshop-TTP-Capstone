
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//import { Link } from "react-router-dom";

export default function SingleArtist() {
  const userId = useParams().id;

  const [User, setUser] = useState([]);

  //fetching one product's data from Strapi
  useEffect(() => {
    const getUser = async () => {
      const response = await fetch(
        `https://ttp-art-store.herokuapp.com/Users/${userId}`
      );
      const data = await response.json();
      setUser(data);
    };
    getUser();
  }, []);

  console.log(User);

  return (
    <div className="single-user-page">
      <div className="User-image">
        <img src={User.image && User.image.url} />
      </div>
      <div className="user-info">
        <h3>{User.username}</h3>
        <div>{User.email}</div>

      </div>
    </div>
  );
}