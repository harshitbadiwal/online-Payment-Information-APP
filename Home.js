import React from "react";
import Aboutus from "./Aboutus";
import Contact from "./Contact";
import Footer from "./Footer";
import Header from "./Header";
import Howitwork from "./Howitwork";
import Navbar from "./Navbar";
import Services from "./Services";



const Home=()=>{
    return<>
  
  <Navbar/>
  <Header/>
  <Howitwork/>
  <Aboutus/>
  <Services/>
  <Contact/>
  <Footer/>
  </>
}
export default Home