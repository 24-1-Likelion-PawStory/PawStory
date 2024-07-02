import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loginhome from "./pages/Loginhome";
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

/*    <BrowserRouter>
      <Routes>
       <Route path= "/:Id" element={<Loginhome/>}/>
       <Route path= "/:Id/my" element={<Myhome/>}/>
       <Route path= "/:Id/community" element={<Community/>}/>
       <Route path= "/:Id/communitywrite" element={<Communitywrite/>}/>
       <Route path= "/:Id/communityread" element={<Communityread/>}/>
      </Routes>
    </BrowserRouter> */
