import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Component/Footer";
import Header from "../Component/Header";

const MainLayOut = () => {
  return (
    // <div>
    //   <header>
    //     <header className="bg-gray-800 text-white p-4 shadow-md">
    //       <div className="container mx-auto flex flex-wrap items-center justify-between">
    //         {/* Logo */}
    //         <div className="text-xl font-bold">
    //           <Link to="/">🌐 LanguageLearn</Link>
    //         </div>

    //         {/* Mobile Navbar Toggle */}
    //         <div className="sm:hidden">
    //           <button
    //             id="menu-toggle"
    //             className="text-white focus:outline-none"
    //             onClick={() =>
    //               document.getElementById("menu").classList.toggle("hidden")
    //             }
    //           >
    //             <GrMenu></GrMenu>
    //           </button>
    //         </div>

    //         {/* Navbar Links */}
    //         <nav
    //           id="menu"
    //           className="hidden navbar-end menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
    //         >
    //           <NavLink to="/" className="hover:text-blue-400">
    //             Home
    //           </NavLink>
    //           <NavLink to="/start-learning" className="hover:text-blue-400">
    //             Start Learning
    //           </NavLink>
    //           <NavLink to="/tutorials" className="hover:text-blue-400">
    //             Tutorials
    //           </NavLink>
    //           <NavLink to="/about-us" className="hover:text-blue-400">
    //             About Us
    //           </NavLink>
    //           { (
    //             <NavLink to="/my-profile" className="hover:text-blue-400">
    //               My Profile
    //             </NavLink>
    //           )}
    //         </nav>

    //         {/* Welcome Message and User Actions */}
    //         <div className="flex items-center mt-2 sm:mt-0 space-x-4">
    //           { (
    //             <div className="hidden sm:block text-sm">
    //               Welcome,{" "}
    //               <span className="font-semibold">tasnim</span>!
    //             </div>
    //           )}

    //             <>
    //               {/* Profile Image */}
    //               <img
    //                 src="https://via.placeholder.com/40"
    //                 alt="User Profile"
    //                 className="w-8 h-8 rounded-full"
    //               />
    //               <button

    //                 className="bg-red-500 hover:bg-red-600 px-4 py-1 rounded-md"
    //               >
    //                 Logout
    //               </button>
    //             </>

    //             <Link
    //               to="/login"
    //               className="bg-blue-500 hover:bg-blue-600 px-4 py-1 rounded-md"
    //             >
    //               Login
    //             </Link>

    //         </div>
    //       </div>
    //     </header>
    //   </header>
    //   <Header></Header>
    // </div>
    <div>
      <header className="">
        <Header></Header>
      </header>
      <section className="min-h-[calc(100vh-308px)] container mx-auto">
        <Outlet></Outlet>
      </section>
      <footer className="container mx-auto">
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default MainLayOut;
