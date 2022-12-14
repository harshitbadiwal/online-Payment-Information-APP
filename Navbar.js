import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar=()=>{
    const [show , setshow] = useState(false)
return<>
<section className="navbar-bg">
<nav className="navbar navbar-expand-lg navbar-light ">
  <div className="container">
    <a className="navbar-brand" to="#">Pay</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
    onClick={()=> setshow(!show)}>
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className={`collapse navbar-collapse ${show ? "show":""}`}>
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink activeclassname='menu_active' className="nav-link " aria-current="page" to="/*">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeclassname='menu_active' className="nav-link" to="/service">Services</NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeclassname='menu_active' className="nav-link" to="/aboutus">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeclassname='menu_active' className="nav-link" to="/contact">Contact</NavLink>
        </li>
      </ul>
      <form className="d-flex">
        <button className=" btn-style" type="submit" >Sign Up</button>
        <button className=" btn-style btn-style-border" type="submit">Log In</button>
      </form>
    </div>
  </div>
</nav>
</section>
</>
}
 export default Navbar
