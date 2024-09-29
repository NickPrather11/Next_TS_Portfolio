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
        dropdownBool={false}
        dropdownContents={[]}
      />

      <NavbarDesktopLink
        path="../projects"
        name="Projects"
        icon={<BsCassette />}
        dropdownBool={true}
        dropdownContents={[
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
        dropdownBool={true}
        dropdownContents={[
          {
            path: "../about/site",
            text: "About This Site",
          },
          {
            path: "../about/nick",
            text: "About Nick",
          },
        ]}
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
