import React from 'react'
import { Outlet } from "react-router-dom";
import Navbar from '../components/sections/Navbar'
import { AuthProvider } from '../context/AuthContext';

const PrimaryLayout = () => {
  return (
    <AuthProvider>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </AuthProvider>
  );
};

export default PrimaryLayout;