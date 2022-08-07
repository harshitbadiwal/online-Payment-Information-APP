import { Navigate } from "react-router-dom"
const Contact =()=>{

    let change=()=>{
     Navigate('/*');
    }
    return<>
        <section className="contectus-section">
            <div className="container">
                <div className="row">
                    <div className=" col-12 col-lg-10 mx-auto">
                        <div className="row">
                            <div className="contect-leftside col-12 col-lg-5">
                                <h1 className="main-heading fw-bold">
                                    Connect With Our Sales Team.

                                </h1>
                                <p className="main-hero-para">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. neque tenetur, sapiente ipsum ad ex. Illo, repellendus!.
                                </p>
                                <figure>
                                    <img src="images/contact.jpg" alt="image not found" className="img-fluid"/>
                                </figure>
                            </div>
                            <div className="contact-rightside col-12 col-lg-7">
                                    <form method="post" >
                                        
                                            <div className="row">
                                                <div className="col-12 col-lg-6 contact-input-feild">
                                                    <input type="text" name="" id="" className="form-control" placeholder="First Name"/>
                                                </div>
                                                <div className="col-12 col-lg-6 contact-input-feild">
                                                    <input type="text" name="" id="" className="form-control" placeholder="Last Name"/>
                                                </div>
                                                                          
                                            </div>
                                            <div className="row">
                                                <div className="col-12 col-lg-6 contact-input-feild">
                                                    <input type="number" name="" id="" className="form-control" placeholder="Phone Number"/>
                                                </div>
                                                <div className="col-12 col-lg-6 contact-input-feild">
                                                    <input type="email" name="" id="" className="form-control" placeholder="Email Id"/>
                                                </div>
                                                                          
                                            </div>
                                            <div className="row">
                                                <div className="col-12 contact-input-feild">
                                                    <input type="text" name="" id="" className="form-control" placeholder="Add Address" />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-12 contact-input-feild">
                                                    <input type="text" name="" id="" className="form-control" placeholder="Enter Your Message" />
                                                </div>
                                            </div>
                                            <div className="form-check form-checkbox-style contact-input-feild">
                                             <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                                <label className="form-check-label main-hero-para" >
                                                 I agree that the Pay may contactme at the email address or phone above
                                                 </label>
                                                </div>
                                        <button  type="Submit" className="btn btn-style w-100" onClick={change}> Submit</button>
                                    </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
}
export default Contact