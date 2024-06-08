import React from 'react'
import Home from './components/home/Home'
import About from './components/about/About'
import Skills from './components/skills/Skills'
// import Projects from './components/projects/Projects'
//import Contact from './components/contact/Contact'
//import NavigationBar from './components/navbar/NavigationBar'
import './App.css'
import Extracirculur from './components/extracirculum/Extracirculum'
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import RootLayout from './components/RootLayout'
import Contact from './components/contact/Contact'



function App() {
   let router=createBrowserRouter([
    

    {
      path:'',
      element:<RootLayout/>
     ,
  children:[
        {
          path:'',
          element:<Home/>
         } ,
         {
           path:'/home',
           element:<Home/>
          },
         {
           path:'/about',
           element:<About/>
     
         },
         {
          path:'/skills',
          element:<Skills/>
         },
         {
          path:'/extracirculum',
          element:<Extracirculur/>
         },
         {
          path:'/contact',
          element:<Contact/>
         }
        ]
      }
       
      
    



    


  ])







  return (
    <div className='App'>
     
     <RouterProvider router={router}/>









    </div>
  )
}


export default App
