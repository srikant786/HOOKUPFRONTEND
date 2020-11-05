import React from "react";
import Navbar from "./navbar"


const home = () => {
  return (
    
      
      <div className="" >
      {/* Home Div Start */}
      <div className="my-32" >
        <h4 className="text-5xl font-black">
          Enhance your {" "}
          <span className="text-blue-500">
            passion <br />by connecting to our platform .
          </span>
        </h4>
        <br />
        <p className=" text-xl text-gray-600 ">
        This is a  platform that helps you to pursue your dreams.
          <br />
          where you can post your skills.
          
        </p>
        <br />
        <Navbar />
      </div>
    </div>
  );
};

export default home;
