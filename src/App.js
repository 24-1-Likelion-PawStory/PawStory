import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Myhome from "./pages/Myhome";
import Community from "./pages/Community";

import Layout from "./pages/Layout";
import Loginhome from "./pages/mainpage/Loginhome";
import Loginpage from "./pages/mainpage/Loginpage";

// animal_register
import Animal_complete from "./pages/mainpage/animal_register/Animal_complete";
import Animal_image from "./pages/mainpage/animal_register/Image";
import Animal_name from "./pages/mainpage/animal_register/Name";
import Animal_select from "./pages/mainpage/animal_register/Select";

// signup
import Signup_complete from "./pages/mainpage/signup/Complete";
import Signup_id from "./pages/mainpage/signup/Id";
import Signup_name_birth from "./pages/mainpage/signup/Name_birth";
import Signup_number from "./pages/mainpage/signup/Number_email";
import Signup_password from "./pages/mainpage/signup/Password";



function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route element={<Layout />}>
      <Route path= "/" element={<Loginhome/>}/>
      <Route path= "/loginpage" element={<Loginpage/>}/>

      <Route path= "/signup_name_birth" element={<Signup_name_birth/>}/>
      <Route path= "/signup_name_birth/number" element={<Signup_number/>}/>
      <Route path= "/signup_name_birth/number/id" element={<Signup_id/>}/>
      <Route path= "/signup_name_birth/number/id/password" element={<Signup_password/>}/>
      <Route path= "/signup_name_birth/number/id/password/complete" element={<Signup_complete/>}/>

      <Route path= "/register_select" element={<Animal_select/>}/>
      <Route path= "/register_select/name" element={<Animal_name/>}/>
      <Route path= "/register_select/name/image" element={<Animal_image/>}/>
      <Route path= "/register_select/name/image/complete" element={<Animal_complete/>}/>

      <Route path= "/my" element={<Myhome/>}/>
      <Route path= "/community" element={<Community/>}/>
       </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;