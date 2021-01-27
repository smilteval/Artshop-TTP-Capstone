import React from "react";
import "./Footer.css";

function Footer(){
    return(
        <div className="main-footer">
        

            <p className="col-sm">
            &copy; {new Date().getFullYear()} Artshop | All rights reserved
          </p> 
          {/* This gets the copyright symbol and year */}


        </div>
    )
}

export default Footer;