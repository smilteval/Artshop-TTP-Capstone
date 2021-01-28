import React from 'react'
import ArtistList from "../components/Artist/ArtistList";
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';



export default function Artists() {
    
    return (
        <div className = "artists">
        <div className="Artist-Page">
       
        <ArtistList />

    </div>
        </div>
    )
}
