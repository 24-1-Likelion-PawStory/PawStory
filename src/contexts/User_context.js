import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user_data, set_user_data] = useState({
    user_id: '',
    phone_number:'',
    email: '',
    name: '',
    user_bir: '',
    password: ''
  });

  const [pet_data, set_pet_data] = useState({
    pet_name: '',
    pet_type: '',
    pet_photo: ''
  });

  const [login_data, set_login_data] = useState({
    user_id: '',
    password: ''
  });

  return (
    <UserContext.Provider value={{ user_data, set_user_data, pet_data, set_pet_data, login_data , set_login_data }}>
      {children}
    </UserContext.Provider>
  );
};
