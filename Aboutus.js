import React, { useState } from "react";
import AboutusApi from "./Api/AboutusApi";
const Aboutus =()=>{
    const [aboutdata , setaboutdata] = useState(AboutusApi)
    return<>
    <section className="commonsection our-services">
        <div className="container mb-5">
        <div className="row">
            <div className="col-12 col-lg-5 text-center our-services-leftside-img">
                <img src="./images/image1.jpg" alt="image not found"/>

            </div>
                <div className="col-12 col-lg-7 our-services-list">
                    
                        <h5 className="mini-title">-- AVAILABLE @ GOOGLE AND IOS STORE ONLY--</h5>

                     <h1 className="main-heading">How to Use the App ? </h1>
                     {aboutdata.map((curElem)=>{
                         const{id ,Number,title,info} =curElem
                         return<>
                         <div className="row our-services-info" key={id}>
                         <div className="col-1 our-services-info">{Number}</div>
                         <div className="col-10 our-services-data">
                             <h3>{title}</h3>
                             <p className="main-hero-para">{info}</p>
                         </div>
                     </div>
                     
                         </>
                        
                     })}
                     <br/>
                     <button className="btn-style btn-style-border button">Learn more</button>
                     </div>
        </div> 
        </div>
    </section>

    <section className="commonsection our-services our-service-rightside">
        <div className="container mb-5">
        <div className="row">
          
                <div className="col-12 col-lg-7 our-service-rightside-content d-flex justify-content-center algin-item-center
                flex-column">
                    
                        <h5 className="mini-title">-- SUPPORT IN ANY LANGUAGES --</h5>

                     <h1 className="main-heading">World class Support is <br/>available 24/7 </h1>
                     {aboutdata.map((curElem)=>{
                         const{id ,Number,title,info} =curElem
                         return<>
                         <div className="row our-services-info" key={id}>
                         <div className="col-1 our-services-info">{Number}</div>
                         <div className="col-10 our-services-data">
                             <h3>{title}</h3>
                             <p className="main-hero-para">{info}</p>
                         </div>
                     </div>
                     
                         </>
                        
                     })}
                     <br/>
                     <button className="btn-style btn-style-border button">Learn more</button>
                     </div>
                     <div className="col-12 col-lg-5 our-services-rightside-img  image">
                <img src="./images/image5.jpg" alt="image not found"/>

            </div>
        </div> 
        </div>
    </section>


        </>
}
export default Aboutus