import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";

import Contactpage from "./pages/Contactpage";
import Aboutpage from "./pages/Aboutpage";


import Servicepage from "./pages/Servicepage";
const App =()=>{
  return<>
 <Routes>
  <Route  path='/*' element={<Home/>}/>
  
  <Route  path='/contact' element={<Contactpage/>}/>
  <Route  path='/service' element={<Servicepage/>}/>
  <Route  path='/aboutus' element={<Aboutpage/>}/>
  </Routes>
  </>
}
export default App