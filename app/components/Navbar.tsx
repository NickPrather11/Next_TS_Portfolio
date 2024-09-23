"use client";
import React, { createContext, useState } from "react";
import {
  BsFillHouseFill,
  BsInfoCircle,
  BsCassette,
  BsEnvelope,
  BsPersonCircle,
} from "react-icons/bs";
import NavbarLink from "./NavbarLink";
import Center from "./Center";

{
  /*
type ExpandedContextType = boolean;

const SidebarContext = createContext<ExpandedContextType>(false);
*/
}

const Navbar = () => {
  {
    /*
  const [expanded, setExpanded] = useState<ExpandedContextType>(false);
  const [activeLink, setActiveLink] = useState(0);
  */
  }
  return (
    <header className="flex flex-row top-0 w-full bg-gray-100 dark:bg-slate-900">
      {/*<SidebarContext.Provider value={expanded}>*/}

      <h2 className="p-4 mr-4 bg-black rounded-3xl">Nick Prather</h2>

      <div className="flex items-center">
        <NavbarLink path="../" text="Home" icon={<BsFillHouseFill />} />

        <NavbarLink
          path="../projectsPage"
          text="Projects"
          icon={<BsCassette />}
        />

        <NavbarLink path="../aboutPage" text="About" icon={<BsInfoCircle />} />

        <NavbarLink
          path="../contactPage"
          text="Contact"
          icon={<BsEnvelope />}
        />

        {/* 
        <NavbarLink
          path="../loginPage"
          text="Login"
          icon={<BsPersonCircle />}
        />
        */}
      </div>

      {/*</SidebarContext.Provider>*/}
    </header>
  );
};

export default Navbar;
