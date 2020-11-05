import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 1) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll',handleScroll)
  })
let navbarClasses=['navbar'];
  if(scrolled){
    navbarClasses.push('scrolled');
  }
  return (
    <div>
      <div className="flex justify-between bg-indigo-600 pl-12">
        <div className ="text-white font-bold transition duration-500 ease-in-out text-center rounded hover:bg-indigo-300 focus:shadow-outline  bg-indigo-500 px-4 py-2 m-2">
          <Link to="/">Home </Link>
        </div>
        <div className="flex justify-end   bg-indigo-600 pr-12">
          <div className="text-white font-bold transition duration-500 ease-in-out text-center rounded hover:bg-indigo-300 focus:shadow-outline  bg-indigo-500 px-4 py-2 m-2">
            <Link to="/signin">SignIn </Link>
          </div>
          <div className="text-white font-bold transition duration-500 ease-in-out text-center rounded hover:bg-indigo-300 focus:shadow-outline   bg-indigo-500 px-4 py-2 m-2">
            <Link to="/signup">SignUp</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
