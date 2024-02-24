import React from 'react'
import AuthNavbar from './../components/Navbar/AuthNavbar';
import { Outlet } from 'react-router-dom';
import Footer from './../Footer/Footer';

export default function Main({crrUser , remove}) {
  return <>

    <AuthNavbar crrUser={crrUser} remove = {remove} />
    <Outlet/>
    <Footer/>
  </>
}
