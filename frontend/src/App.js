import React, { useState } from 'react'



import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import jwtDecode from 'jwt-decode'

import Home from './Component/Home/Home';
import Login from './Component/Login/Login';
import Registration from './Component/Registration/Registration.jsx';
import Notfound from './Component/Notfound/Notfound';
import Features from './Component/Features/Features.jsx';
import Contact from './Component/Contactus/Contact';

import Payment from './Component/Payment/Payment';
import Specialties from './Component/Specialties/Specialties';
import Main from './Component/Main/Main';
import Chose from './Component/ChoseTheDoctor/Chose';
import DoctorPage from './Component/DoctorPage/DoctorPage';
import PaymentPage from './Component/PaymentPage/PaymentPage';
import VerifyCode from './Component/VerifyCode/VerifyCode';
import Abdelrahman from './Component/DoctorPage/Abdelrahman';
import Omar from './Component/DoctorPage/Omar';
import Halla from './Component/DoctorPage/Halla';
import Akram from './Component/DoctorPage/Akram';
import Samer from './Component/DoctorPage/Samer';
import Profile from './Component/Profile/Profile';
import { useEffect } from 'react';

import OnlineMeeting from './Component/OnlinMeeting/OnlineMeeting';

import Dashbord from './DoctorComponent/Doctor/Dashbord';
import Patiant from './DoctorComponent/Doctor/Patiant';
import Schedule from './DoctorComponent/Doctor/Schedule';
import Setting from './DoctorComponent/Doctor/Setting';
import Appointments from './DoctorComponent/Doctor/Appointments';
import SignUp from './DoctorComponent/Doctor/SignUp.jsx';
import LoginAsdoctor from './DoctorComponent/Doctor/LoginAsdoctor.jsx';
import AdminDashbord from './AdminComponent/AdminDashbord/AdminDashbord';
import PatientAdmin from './AdminComponent/AdminDashbord/PatientAdmin';
import AppointmentsAdmin from './AdminComponent/AdminDashbord/AppointmentsAdmin';
import DoctorsAdmin from './AdminComponent/AdminDashbord/DoctorsAdmin';
import SignupAdmin from './AdminComponent/AdminDashbord/SignupAdmin.jsx';
import TheTableOfOnlineMeeting from './Component/OnlinMeeting/TheTableOfOnlineMeeting';
import DoctorPageOnline from './Component/DoctorPageOnilen/DoctorPageOnline';
import AbdelrahmanOnline from './Component/DoctorPageOnilen/AbdelrahmanOnline';
import OmarOnline from './Component/DoctorPageOnilen/OmarOnline';
import HallaOnline from './Component/DoctorPageOnilen/HallaOnline';
import AkramOnline from './Component/DoctorPageOnilen/AkramOnline';
import SamerOnline from './Component/DoctorPageOnilen/SamerOnline';
import ChoseOnline from './Component/ChoseTheDoctor/ChoseOnline';
import SpecialtiesOnline from './Component/Specialties/SpecialtiesOnline.jsx';
import PaymentOnline from './Component/Payment/PaymentOnline';
import Vcodeonline from './Component/Vcodeonline/Vcodeonline';
import PatientForm from './CompletethePatientForm/PatientForm';
import PaymentPageOnline from './Component/PaymentPage/PaymentPageOnline';
import History from './Component/History/History';
import PatiantOnlineSession from './DoctorComponent/Doctor/PatiantOnlineSession';
import AddHistory from './DoctorComponent/Doctor/AddHistory';









export default function App() {

  const [loggedInUser, setLoggedInUser] = useState(null)

  function getLoggedInUser() {

    if (localStorage.getItem('tkn') != null) {

      let tkn = localStorage.getItem('tkn')
      let userData = jwtDecode(tkn);
      setLoggedInUser(userData)
    }
  }

  function removeUserData() {
    localStorage.removeItem('tkn');
    setLoggedInUser(null)
  }
  function checkReload() {
    if (localStorage.getItem('tkn') != null && loggedInUser == null) {
      getLoggedInUser()
    }
  }

  useEffect(function () {

  //   checkReload()
  // }, [])
  checkReload()
})





  const router = createBrowserRouter([


    {
      path: '', element: <Main remove={removeUserData} crrUser={loggedInUser} />, children: [
        { path: "payment", element: <Payment /> },
        {path: 'History' , element:<History/>},
        { path: '', element: <Home /> },
        { path: 'Home', element: <Home /> },
        { path: 'Login', element: <Login logVer={getLoggedInUser} /> },
        { path: 'Registration', element: <Registration /> },
        { path: 'Features', element: <Features /> },
        { path: 'Specialties', element: <Specialties /> },
        { path: 'SpecialtiesOnline', element: <SpecialtiesOnline /> },
        { path: 'Contact', element: <Contact /> },
        { path: 'doctorchose', element: <Chose /> ,children:[
          {path: ':medicalId'}
        ] },
        { path: 'doctorOnline', element: <ChoseOnline /> },
        { path: 'DoctorPage/:id', element: <DoctorPage /> },
        { path: 'Abdelrahman', element: <Abdelrahman /> },
        { path: 'Omar', element: <Omar /> },
        { path: 'Halla', element: <Halla /> },
        { path: 'Akram', element: <Akram /> },
        { path: 'Samer', element: <Samer /> },
        { path: 'PaymentPage', element: <PaymentPage /> },
        { path: 'PaymentPageOnline', element: <PaymentPageOnline/> },
        { path: 'VerifyCode', element: <VerifyCode /> },
        { path: 'Profile', element: <Profile /> },
        { path: 'TheTableOfOnlineMeeting', element: <TheTableOfOnlineMeeting /> },
        { path: 'Meeting', element: <OnlineMeeting /> },
        { path: '*', element: <Notfound /> },
        { path: 'DoctorPageOnline', element: <DoctorPageOnline /> },
        { path: 'AbdelrahmanOnline', element: <AbdelrahmanOnline /> },
        { path: 'OmarOnline', element: <OmarOnline /> },
        { path: 'HallaOnline', element: <HallaOnline /> },
        { path: 'AkramOnline', element: <AkramOnline /> },
        { path: 'SamerOnline', element: <SamerOnline /> },
        { path: "PaymentOnline", element: <PaymentOnline /> },
        { path: "PatientForm", element: <PatientForm /> },
        { path: 'VCodeOnline', element: <Vcodeonline /> }

      ]
    },
    { path: 'LoginAsDocotr', element: <LoginAsdoctor /> },
    { path: 'doctor', element: <SignUp /> },
    { path: 'Dashbord', element: <Dashbord /> },
    { path: 'Patiant', element: <Patiant /> },
    {path:'PatiantOnlineSession' , element:<PatiantOnlineSession/>},
    { path: 'Schedule', element: <Schedule /> },
    { path: 'Setting', element: <Setting /> },
    { path: 'Appointments', element: <Appointments /> },
    {path: 'AddHistory' , element:<AddHistory/>},

    { path: 'Cpanel', element: <SignupAdmin /> },
    { path: 'Admin', element: <AdminDashbord /> },
    { path: 'PatientAdmin', element: <PatientAdmin /> },
    { path: 'AppointmentsAdmin', element: <AppointmentsAdmin /> },
    { path: 'DoctorsAdmin', element: <DoctorsAdmin /> },
    

  ])



  return <>
    
    
    <RouterProvider router={router} />
      
  </>
}
