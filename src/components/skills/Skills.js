import React from 'react'
import './Skills.css'
import html from '../../img/html.png';
import css from '../../img/css.png'
import react from '../../img/react.png'
import javascript from '../../img/javascript.png'
import mysql from '../../img/sql.png'
import github from '../../img/github.png'
import c from '../../img/c.png'
import cpp from '../../img/cpp.png'
import python from '../../img/python.png'

function Skills() {
  return (
    <div className='skills   text-white'>
    <div className=" d-flex flex-column justify-content-center mx-auto p-4 ">

    <h1>SKILLS</h1>
    <p className='mt-3'>Here the Technologies I've worked with</p>
    <div className="row row-cols-4 row-cols-md-4 pt-5 row-cols-lg-6 text-center"
    >
    
      <div className='shadow shadow-lg rounded-lg'
      >
      <img
        className='' style={{ width: '7rem', maxWidth: '' }} 
        src={html}
        alt=""
      />
      <p className="">html</p>
      </div>


      <div className='shadow shadow-lg rounded-lg'>
      <img
        className=' w-10 py-2 mx-auto g-4' style={{ width: '7rem', maxWidth: '' }} 
        src={css}
        alt=""
      />
      <p className="">css</p>
      </div>


      <div className='shadow shadow-lg rounded-lg'>
      <img
        className='g-4'
        style={{ width: '7rem', maxWidth: '' }} 
        src={react}
        alt=""
      />
      <p className="">reactJS</p>
      </div>

      <div className='shadow shadow-lg rounded-lg'>
      <img
        className='g-4'
        style={{ width: '7rem', maxWidth: '' }} 
        src={javascript}
        alt=""
      />
      <p className="">javascript</p>
      </div>


      <div className='shadow shadow-lg rounded-lg'>
      <img
        className='g-4'
        style={{ width: '7rem', maxWidth: '' }} 
        src={mysql}
        alt=""
      />
      <p className="">mysql</p>
      </div>



      <div className='shadow shadow-lg rounded-lg'>
      <img
        className='g-4'
        style={{ width: '7rem', maxWidth: '' }} 
        src={github}
        alt=""
      />
      <p className="">github</p>
      </div>
      
    


      </div>
      <p className='mt-5'>Here the programming languages I know(basics)</p>
      <div className='row row-cols-3 row-cols-md-3 row-cols-lg-3 '>
     
      <div className='shadow shadow-lg'>
      <img
        className='g-4'
        style={{ width: '7rem', maxWidth: '' }} 
        src={c}
        alt=""
      />
      <p className="">c</p>
      </div>



      <div className='shadow shadow-lg rounded-lg'>
      <img
        className='g-4'
        style={{ width: '7rem', maxWidth: '' }} 
        src={cpp}
        alt=""
      />
      <p className="">c++</p>
      </div>
      

      <div className='shadow shadow-lg rounded-lg '>
      <img
        className='g-4'
        style={{ width: '7rem', maxWidth: '' }} 
        src={python}
        alt=""
      />
      <p className="">python</p>
      </div>
      </div>

      

    </div>
  

    </div>


    
  )
}

export default Skills