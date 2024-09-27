"use client";
import React, { useState } from "react";
import NavbarDesktopLink from "./NavbarDesktopLink";
import { BsCassette, BsFillHouseFill, BsInfoCircle } from "react-icons/bs";

const NavbarDesktop = ({ className }: any) => {
  const [activeLink, setActiveLink] = useState(0);
  return (
    <div className={`hidden items-center gap-4 ${className}`}>
      <NavbarDesktopLink
        path="../"
        name="Home"
        icon={<BsFillHouseFill />}
        dropdown={false}
        dropdownProps={[]}
      />

      <NavbarDesktopLink
        path="../projects"
        name="Projects"
        icon={<BsCassette />}
        dropdown={true}
        dropdownProps={[
          {
            path: "../projects/music",
            text: "Music",
          },
          {
            path: "../projects/paintings",
            text: "Paintings",
          },
        ]}
      />

      <NavbarDesktopLink
        path="../about"
        name="About"
        icon={<BsInfoCircle />}
        dropdown={false}
        dropdownProps={[]}
      />

      {/*<NavbarDesktopLink path="../contact" text="Contact" icon={<BsEnvelope />} dropdown={false} dropdownProps={[]} />*/}

      {/* 
        <NavbarDesktopLink
          path="../login"
          text="Login"
          icon={<BsPersonCircle />}
          dropdown={false}
          dropdownProps={[]}
        />
        */}
    </div>
  );
};

export default NavbarDesktop;
