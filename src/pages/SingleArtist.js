
import { Avatar } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//npm import ArtistCard from "../components/Artist/ArtistCard"
//import { Link } from "react-router-dom";

export default function SingleArtist(props) {
  const { blurb,name,imageUrl,id} = props;
  const userId = useParams().id;

  const [User, setUser] = useState([]);

const formSubmit = (event) => {
  document.getElementById('c-form').parentNode.removeChild(document.getElementById('c-form'));

  document.getElementById('form-complete').innerHTML = "Thank you for your submission! You'll be contacted shortly"
  return(console.log("Hello "))
};
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

  console.log(User.avatar && User.avatar.url);

  return (
  
    <div className="single-user-page">
       
      <div className="User-image">

     
      
      <img class = "Artist-image"src= {User.avatar && User.avatar.url}/> 
    
      <h3>{User.username}</h3>
        <p class= "title">My Email: {User.email}</p>
        <p><button>My Image Collection</button></p>
      </div>

      <div>
<form id= 'c-form'onSubmit = {formSubmit} >

<ul class="form-style-1">
    <li><label>Full Name <span class="required">*</span></label><input type="text" name="field1" class="field-divided" placeholder="First" /> <input type="text" name="field2" class="field-divided" placeholder="Last" /></li>
    <li>
        <label>Email <span class="required">*</span></label>
        <input type="email" name="field3" class="field-long" />
    </li>

    <li>
        <label>Specifications/Requirements <span class="required">*</span></label>
        <textarea name="field5" id="field5" class="field-long field-textarea">
          Enter your details here...be as thorough as possible
        </textarea>
    </li>
    <li>
        <input type="submit" value="Submit" />
    </li>
</ul>
</form>

  <h3 id = "form-complete"> 

  </h3>
</div>
    </div>
  );
}