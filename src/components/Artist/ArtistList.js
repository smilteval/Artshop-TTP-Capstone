import React, { useEffect, useState } from "react";
import ArtistCard from "./ArtistCard";

export default function Artists(props) {
  const [user, setUser] = useState([]);


useEffect(() => {
    const getUser = async () => {
      const response = await fetch("https://ttp-art-store.herokuapp.com/users");
      const data = await response.json();
      setUser(data);
      
    };
    getUser();
    
  }, []);

  console.log(user);

return (
  <div>
    <div className="Artist-list">
      
        {user.map((users) => {
          console.log(users.username)
        return(
          
          <ArtistCard
          username={users.username}
          email={users.email}
          id = {users.id}
          />

        )
        }
        )}
      </div>
  </div>
);

}