import { useState } from "react";
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import Login from "./Pages/Login.jsx";
import Register from './Pages/Register.jsx';


export const App = () =>{
  return(
    <div>
     
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </BrowserRouter>
      
    </div>

  )
};

