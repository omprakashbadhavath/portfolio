import React from "react";

import "./Home.css"

 function Home() {
 
 
  
  return (
    // bg-[#4a596f]
    <div className=" home pt-7 ">
    
        <p className=" text-white ">Hey, my name is </p>
        <h1 className="fw-bold">
          OMPRAKASH BADAWAT
        </h1>
        <h2 className="font-bold text-info">
          STUDENT
        </h2>
        <p className="mt-4 text-white">
          A 3rd year IT student from VNRVJIET college, I am specialized in React
          JS and python. Im open for freelancing (designing and developing) web
          applications.
        </p>
        <div className="group">
          <button className="btn btn-custom text-white  border-white  py-3 px--2  " >
            
           <p>Please go through NavBar</p> 
            
          </button>
        </div>
      
    </div>
  );
}
export default Home;