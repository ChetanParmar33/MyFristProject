import React from "react";
import "./Comman.css";

const Comman =(props)=>
{
    return(
        <>
        <div className="blog">
            <h1>{props.title}</h1>
            <p>Discover & connect with great places around the world.</p>
        </div>
        </>
    )
}

export default Comman;