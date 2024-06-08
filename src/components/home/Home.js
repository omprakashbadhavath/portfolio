import React from "react";
import { HiArrowRight } from "react-icons/hi";
import "./Home.css"

 function Home() {
 
 
  
  return (
    // bg-[#4a596f]
    <div className=" home  ">
      <div className="">
        <p className=" text-white ">Hey, my name is </p>
        <h1 className="fw-bold">
          OMPRAKASH BADAWAT
        </h1>
        <h2 className="font-bold text-info">
          STUDENT
        </h2>
        <p className="mt-4 text-white">
          A 2nd year IT student from VNRVJIET college, I am specialized in React
          JS and python. Im open for freelancing (designing and developing) web
          applications.
        </p>
        <div className="group">
          <button className="btn btn-custom text-white  border-white  py-3   " >
            View More!
            <HiArrowRight className="ms-2  rotate-90" />
          </button>
        </div>
      </div>
    </div>
  );
}
export default Home;