import React from "react";
import earth from "../images/earthpng.png"
import nav from "../components/nav.css"
export default function Navbarr(){
    return(
        <nav className=" bg-danger">
            <img src={earth} alt="earth icon"  className="nav--logo" />
            <span>My Travel Journey</span>
        </nav>
    )
}