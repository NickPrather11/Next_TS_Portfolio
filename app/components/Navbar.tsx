"use client";
import React, { createContext, useState } from "react";
import {
  BsFillHouseFill,
  BsInfoCircle,
  BsCassette,
  BsEnvelope,
  BsPersonCircle,
  BsList,
} from "react-icons/bs";
import MobileNavLink from "./MobileNavLink";
import NavbarLink from "./NavbarLink";

type ExpandedContextType = boolean;

const SidebarContext = createContext<ExpandedContextType>(false);

const Navbar = () => {
  const [expanded, setExpanded] = useState<ExpandedContextType>(false);
  const [activeLink, setActiveLink] = useState(0);

  return (
    <header className="flex flex-row top-0 w-full bg-gray-100 dark:bg-slate-900">
      <h2 className="p-4 mr-4 bg-black rounded-3xl">Nick Prather</h2>

      <div className="flex flex-grow justify-end items-center mr-4 text-3xl lg:hidden">
        <button
          onClick={() => setExpanded((curr) => !curr)}
          className={`p-2 rounded-full ${expanded ? "bg-slate-500" : ""}`}
        >
          <BsList />
        </button>
      </div>

      <SidebarContext.Provider value={expanded}>
        <div
          className={`${
            expanded
              ? "flex flex-col absolute right-0 mr-2 mt-12 px-2 rounded-xl border border-slate-200 bg-gray-100 dark:bg-slate-900"
              : "hidden"
          }`}
        >
          <button onClick={() => setExpanded((curr) => !curr)}>
            <MobileNavLink path="../" text="Home" />
          </button>
          <hr className="w-full" />
          <button onClick={() => setExpanded((curr) => !curr)}>
            <MobileNavLink path="../projects" text="Projects" />
          </button>
          <hr className="w-full" />
          <button onClick={() => setExpanded((curr) => !curr)}>
            <MobileNavLink path="../about" text="About" />
          </button>
        </div>
      </SidebarContext.Provider>

      <div className="hidden lg:flex lg:items-center">
        <NavbarLink path="../" text="Home" icon={<BsFillHouseFill />} />

        <NavbarLink path="../projects" text="Projects" icon={<BsCassette />} />

        <NavbarLink path="../about" text="About" icon={<BsInfoCircle />} />

        {/*<NavbarLink path="../contact" text="Contact" icon={<BsEnvelope />} />*/}

        {/* 
        <NavbarLink
          path="../login"
          text="Login"
          icon={<BsPersonCircle />}
        />
        */}
      </div>
    </header>
  );
};

export default Navbar;
