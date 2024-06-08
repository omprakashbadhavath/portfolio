import React from 'react'
import NavigationBar from './navbar/NavigationBar'
// import Home from './home/Home'
// import About from './about/About'
// import Skills from './skills/Skills'
// import Extracircular from './extracirculum/Extracirculum'
import { Outlet } from 'react-router-dom'


function RootLayout() {
  return (
    <div>

   <NavigationBar/>
   {/* <Home/>
   <About/>
   <Skills/>
    */}
   {/* <Extracircular/> */}
   <Outlet/>
   <div style={{minHeight:'25vh'}}></div>





    </div>
  )
}

export default RootLayout