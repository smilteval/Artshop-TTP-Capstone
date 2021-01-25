import React from 'react'
import ArtistList from "../components/Artist/ArtistList";

export default function Artists() {
    return (
        <div className = "artists">
               
      <div className="all-categories">
        <div className="Artist-Page">
          <ArtistList category="Meet Our Artists"/>
        </div>
    </div>
        </div>
    )
}
