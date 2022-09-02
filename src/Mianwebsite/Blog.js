import React from "react";
import Comman from "./Comman/Comman";
import "./Blog.css";
import Blog6 from "./BlogCom/Blog6";
import Box6API from "./Componates/API/Top_destion_API";
import Footer from "./Componates/Footer";

const Blog = ()=>
{
    return(
        <>
        <Comman title="Blog"/>

<div className="mbox6">

        {
            Box6API.map((value)=>{
                return <Blog6 
                title={value.title}
                imgscr={value.imgscr}/>
            })
        }

    </div>
           
    <div className="btn_pre_Next">
                    <button>Prev</button>
                    <button>Next</button>
    </div>
           <Footer/>
        </>
    )
}

export default Blog;