/* eslint-disable react/jsx-pascal-case */
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loginhome from "./pages/Loginhome";
import Home_write from "./pages/Home_write.jsx"
import Myhome from "./pages/Myhome";
import Community from "./pages/Community";
import Layout from "./pages/Layout";
/*;
import Communitywrite from "./pages/Communitywrite";
import Communityread from "./pages/Communityread"; */

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route element={<Layout />}>
        <Route path= "/" element={<Loginhome/>}/>
        <Route path= "/post" element={<Home_write/>}/>
        <Route path= "/my" element={<Myhome/>}/>
        <Route path= "/community" element={<Community/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

/*    <BrowserRouter>
      <Routes>
        <Route path= "/:Id" element={<Loginhome/>}/>
        <Route path= "/:Id/my" element={<Myhome/>}/>
        <Route path= "/:Id/community" element={<Community/>}/>
        <Route path= "/:Id/communitywrite" element={<Communitywrite/>}/>
        <Route path= "/:Id/communityread" element={<Communityread/>}/>
      </Routes>
    </BrowserRouter> */
