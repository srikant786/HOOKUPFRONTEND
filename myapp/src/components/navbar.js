import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="  pl-12">
      
        <div className=" flex justify-center   pr-12">
          <Link to="/signin">
            {" "}
            <div className="text-white font-bold transition duration-500 ease-in-out text-center rounded hover:bg-blue-300 focus:shadow-outline  bg-blue-500 px-4 py-2 m-2">
              SignIn
            </div>
          </Link>
          <Link to="/signup">
            <div className="text-white font-bold transition duration-500 ease-in-out text-center rounded hover:bg-blue-300 focus:shadow-outline   bg-blue-500 px-4 py-2 m-2">
              SignUp
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
