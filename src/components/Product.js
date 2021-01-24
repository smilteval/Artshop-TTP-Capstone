import React from 'react'

const API_URL = 'http://localhost:1337';

const formatImageUrl = (url) => `${API_URL}${url}`;

export default ({ title, url, description }) => {
    return (
        <div className = "product">
            <img className= "Product__Image" src={formatImageUrl(url)} />
            <h3>{title}</h3>
            <text>{description}</text>
        </div>
    )
}
