import React, { useState } from "react";
import Workapi from "./Api/Workapi";


const Howitwork =()=>{
    const [api ,setapi] =useState(Workapi)
    return<>
    <div className="work-container container">
        <h1 className="main-heading text-center">How does it Work</h1>
        <div className="row">
        {api.map((curElem)=>{
            const {id,logo,title,info} =curElem
            return<>
            <div className="col-12 col-lg-4 text-center work-container-subdiv">
                
                <i className={`font-awesome-style ${logo}`}></i>
                <h1 className="sub-heading ">{title}</h1>
                <p className="main-hero-para w-100">{info}</p>
                </div>
            </>
        })}
            
           
            
            
        </div>
    </div>
    </>
}
export default Howitwork