import React from 'react'
import { NavLink } from 'react-router-dom';
import './NavigationBar.css'

function NavigationBar() {
  
  let see = "rgb(51, 65, 85)";

  return (
    <div className='text-white'>
      <div
      
      style={{ background: see }}
    >
      <div className="m-auto ">
        <ul className="nav justify-content-center   p-3 fs-5">
          <li className='nav-link'
            
          >
            < NavLink className="nav-link " to=""> 
           Home
           </NavLink>
          </li>
          <li className='nav-link'>
        
         < NavLink className="nav-link " to="about"> 
          About
        
          </NavLink>
          </li>
          <li className='nav-link'
            
          >
            <NavLink className="nav-link" to="skills">
          Skills
        
        </NavLink>
          </li>
          
          <li className='nav-link'
            
          >
            <NavLink className="nav-link " to="extracirculum">
          Extracirculum
        
        </NavLink>
          </li>
          <li className='nav-link'>
          <NavLink className="nav-link " to="contact">
          Contact
        
        </NavLink>
          </li>
        </ul>
      </div>
      </div>
    </div>
  )
}

export default NavigationBar
  