import React from "react";

const Header =()=>{
    return<>
        <header>
            <section className="container main-hero-container">
                <div className="row">
                    <div className="col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column align-item-start">
                        <h1 className="display-5">
                            Online Payment Mode <br/> Easy for You.
                        </h1>
                        <p className="main-hero-para">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos assumenda nostrum nemo, blanditiis qui eum vel ipsum voluptate inventore magni libero rerum amet aspernatur totam. Distinctio laudantium enim porro eveniet?
                        </p>
                        <h3>Get Early Access for You </h3>
                        <div className="input-group mt-3">
                            <input type="text" className="rounded-pill w-75 me-3 form-control-text" placeholder="Enter your Email"/>
                            <div className="input-group-button"> Get it now</div>
                        </div>
                       
                    </div>
                    <div className="col-12 col-lg-6 header-right-side d-flex justify-content-center align-item-center main-herosection-images">
                            <img src="./images/image2.jpg " alt="image2" className="img-fluid"/>
                            <img src="./images/image4.jpg" alt="image4" className="img-fluid main-herosection-img2"/>
                        </div>
                </div>
            </section>
        </header>
    </>

}
export default Header