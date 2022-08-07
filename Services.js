import { useState } from "react"
import ServiceApi from "./Api/ServiceApi"
const Services =()=>{
    const [service , setservice] = useState(ServiceApi)
    return<>
       <section className="service-main-container">
           <div className="container service-container">
               <h1 className="main-heading text-center fw-bold">
                   How to send money
               </h1>
               <div className="row">
               {service.map((CurElem)=>{
                   const {id ,logo,title,info} =CurElem
                    return<>
                        <div className="col-11 col-lg-4 col-xxl-4 works-container-subdiv" key={id}>
                        
                   <h2 className="sub-heading">{title} </h2>
                   <p className="main-hero-para">{info}</p>

                   </div>
                    </>
               })}
                                  </div>
           </div>
       </section>
    </>
}

export default Services