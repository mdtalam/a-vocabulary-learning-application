import React from "react";
import { GrLanguage } from "react-icons/gr";
import { Link, NavLink } from "react-router-dom";
import userLogo from '../../src/assets/user.png';

const Header = () => {
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/start-learning">Start Learning</NavLink>
      </li>
      <li>
        <NavLink to="/tutorials">Tutorials</NavLink>
      </li>
      <li>
        <NavLink to="/about-us">About Us</NavLink>
      </li>
      <li>
        <NavLink to="/my-profile">My Profile</NavLink>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar bg-cool-blue text-white p-4 shadow-md container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-cool-blue rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link to="/" className="text-2xl font-bold flex items-center gap-2">
            <GrLanguage></GrLanguage> <span className="hidden md:block lg:block">Lingo Bingo</span><span className="block md:hidden lg:hidden">Bingo</span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-bold">
            {links}
          </ul>
        </div>
        <div className="navbar-end gap-4">
            <h1 className="text-lg">Welcome, <span>tasnim</span></h1>
            <img className="rounded-full" src={userLogo} alt="" />
          <button className="bg-blue-500 hover:bg-blue-600 px-4 py-1 rounded-md">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
