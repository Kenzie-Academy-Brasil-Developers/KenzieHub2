import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login/login";
import Register from "../pages/Register/register";
import Dashboard from "../pages/Dashboard/dashboard";
import PageNotFound from "../pages/PageNotFound/pagenotfound";
import ProtectRoutes from "../pages/ProtectRoutes/protectRoutes";
import { TechProvider } from "../providers/TechContext";

export default function AppRoutes() {

  
  return (
    <Routes>
      <Route path="/" element={<Login />} />     
      <Route path="/sessions" element={<Login />} />     
      <Route path="/users" element={<Register />} />      
      <Route path="*" element={<PageNotFound />} />




      <Route path="/profile" element={<ProtectRoutes/>} >

      <Route path="/profile" element={<TechProvider><Dashboard /></TechProvider>} />
      </Route>



    </Routes>

    

  );
}
