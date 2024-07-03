/* eslint-disable react/jsx-pascal-case */
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loginhome from "./pages/Loginhome";
import Home_write from "./pages/Home_write.jsx"
import Home_diary from "./pages/Home_diary.jsx"
import Myhome from "./pages/Myhome";
import Community from "./pages/Community";
import Layout from "./pages/Layout";
import Communityread from "./pages/Comunnityread";
import Communitywrite from "./pages/Communitywrite";


function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route element={<Layout />}>
        <Route path= "/" element={<Loginhome/>}/>
        <Route path= "/post" element={<Home_write/>}/>
        <Route path= "/diary" element={<Home_diary/>}/>
        <Route path= "/my" element={<Myhome/>}/>
        <Route path= "/community" element={<Community/>}/>
        <Route path= "/communityread" element={<Communityread/>}/>
        <Route path= "/communitywrite" element={<Communitywrite/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;