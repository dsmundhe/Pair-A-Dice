import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Course from '../course/Course'
import GetSkills from '../GetSkills/GetSkills';
import Login from '../Loign/Login';
import SignUp from '../silgnUp/Signup';

import Cyber from '../coursePages/Cyber/Cyber';
import Ml from '../coursePages/ML/Ml';
import Photo from '../coursePages/PhotoGr/Photo'
import WebDev from '../coursePages/webdev/WebDev';
import DataScience from '../coursePages/dataScience/DataScience';
import DigitalMar from '../coursePages/digitalMar/DigitalMar';
import Graphics from '../coursePages/Graphics/Graphic';
import MobileDev from '../coursePages/mobileDev/MobileDev'
import About from '../About/About';
import Contact from '../contact/Contact';
import Service from '../service/Service';
import Profile from '../profile/Profile';

function Layout() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route  path='/course' element={<Course/>}></Route>
        <Route  path='/' element={<GetSkills/>}></Route>
        <Route  path='/login' element={<Login/>}></Route>
        <Route  path='/signup' element={<SignUp/>}></Route>
        <Route  path='/webdev' element={<WebDev/>}></Route>
        <Route  path='/ds' element={<DataScience/>}></Route>
        <Route  path='/ml' element={< Ml/>}></Route>
        <Route  path='/gd' element={<Graphics/>}></Route>
        <Route  path='/dm' element={<DigitalMar/>}></Route>
        <Route  path='/md' element={<MobileDev/>}></Route>
        <Route  path='/ph' element={<Photo/>}></Route>
        <Route  path='/cyber' element={<Cyber/>}></Route>
        <Route  path='/about' element={<About/>}></Route>
        <Route  path='/contact' element={<Contact/>}></Route>
        <Route  path='/services' element={<Service/>}></Route>
        <Route  path='/profile' element={<Profile/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Layout