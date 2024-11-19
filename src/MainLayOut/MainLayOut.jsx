import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Component/Footer";
import Header from "../Component/Header";

const MainLayOut = () => {
  return (
    <div>
        <navbar>
        <Header></Header>
        </navbar>
      
      <div className="min-h-[calc(100vh-308px)] container mx-auto">
        <Outlet></Outlet>
      </div>
      <footer className="container mx-auto">
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default MainLayOut;
