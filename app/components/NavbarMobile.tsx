"use client";
import React, { createContext, useState } from "react";
import {
  BsCassette,
  BsFillHouseFill,
  BsInfoCircle,
  BsList,
} from "react-icons/bs";
import NavbarMobileLink from "./NavbarMobileLink";

type ExpandedContextType = boolean;

const MobileMenuContext = createContext<ExpandedContextType>(false);

const NavbarMobile = ({ className }: any) => {
  const [expanded, setExpanded] = useState<ExpandedContextType>(false);
  const handleParentExpandedStateUpdate = (newStateValue: boolean) => {
    setExpanded(newStateValue);
  };

  return (
    <div className={`flex flex-grow justify-end ${className}`}>
      <div className="flex items-center mr-4 text-3xl">
        <button
          onClick={() => setExpanded((curr) => !curr)}
          className={`p-2 rounded-full ${expanded ? "bg-slate-500" : ""}`}
        >
          <BsList />
        </button>
      </div>
      <MobileMenuContext.Provider value={expanded}>
        <div
          className={`${
            expanded
              ? "flex flex-col absolute right-0 mr-2 mt-16 rounded-xl border border-slate-200 bg-gray-100 dark:bg-slate-900"
              : "hidden"
          }`}
        >
          <NavbarMobileLink
            name="Home"
            icon={<BsFillHouseFill />}
            childDropdownBool={false}
            childDropdownContents={[]}
            onParentExpandedStateUpdate={handleParentExpandedStateUpdate}
          />
          <hr className="w-full" />
          <NavbarMobileLink
            name="Projects"
            icon={<BsCassette />}
            childDropdownBool={true}
            childDropdownContents={[
              {
                name: "Music",
                path: "../projects/music",
              },
              {
                name: "Paintings",
                path: "../projects/paintings",
              },
            ]}
            onParentExpandedStateUpdate={handleParentExpandedStateUpdate}
          />
          <hr className="w-full" />
          <NavbarMobileLink
            name="About"
            icon={<BsInfoCircle />}
            childDropdownBool={true}
            childDropdownContents={[
              {
                name: "About This Site",
                path: "../about/site",
              },
              {
                name: "About Nick",
                path: "../about/nick",
              },
            ]}
            onParentExpandedStateUpdate={handleParentExpandedStateUpdate}
          />
        </div>
      </MobileMenuContext.Provider>
    </div>
  );
};

export default NavbarMobile;
