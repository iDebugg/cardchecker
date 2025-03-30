"use client";
import React, { useState } from "react";
import "../styles/Navbar.css";
import AnchorLink from "react-anchor-link-smooth-scroll";
import logo from "../assets/img/istockphoto-182856428-612x612-removebg-preview.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [menu, setMenu] = useState("home");

  return (
    <nav className="navbggg bg-[#121212] text-white px-5 py-3  top-0 left-0 w-full fixed z-50">
      <div className="container mx-auto flex justify-between items-center">
        <AnchorLink className="anchor-link" offset={50} href="#hero">
          <div className="display: flex gap-3" onClick={() => setMenu("hero")}>
            {/* <img src={logo} alt="" className="ToroGlogo w-10 h-10" /> */}
            <h1 className="CompanyName text-sm sm:text-xl border p-1">
              GiftCard <br /> Checker
            </h1>
          </div>
        </AnchorLink>

        

      
      </div>

     
    </nav>
  );
};

export default Navbar;
