"use client";
import React, { createContext, ReactNode, useState } from "react";
import {
  BsCassette,
  BsChevronDown,
  BsFillHouseFill,
  BsInfoCircle,
  BsList,
} from "react-icons/bs";
import NavbarMobileLink from "./NavbarMobileLink";
import Link from "next/link";
import Center from "./Center";

type ExpandedContextType = boolean;

const MobileMenuContext = createContext<ExpandedContextType>(false);

{
  /* TEMP */
}
interface ChildDropdownLink {
  name: string;
  path: string;
}

{
  /* TEMP */
}
interface NavbarMobileLinkProps {
  name: string;
  icon: ReactNode;
  childDropdownBool: boolean;
  childDropdownContents: ChildDropdownLink[];
  onParentExpandedStateUpdate: (newStateValue: boolean) => void;
}

{
  /* TEMP */
}
type ChildExpandedContextType = number;

{
  /* TEMP */
}
const ChildContext = createContext<ChildExpandedContextType>(0);

const NavbarMobile = ({ className }: any) => {
  const [expanded, setExpanded] = useState<ExpandedContextType>(false);
  const handleParentExpandedStateUpdate = (newStateValue: boolean) => {
    setExpanded(newStateValue);
  };

  {
    /* TEMP */
  }
  const [childExpanded, setChildExpanded] =
    useState<ChildExpandedContextType>(0);

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
          {/* TEMP NAVBAR, NO COMPONENTS */}
          <div className="flex flex-row">
            <Link
              href="../"
              className="flex flex-row navlink gap-2"
              onClick={() => handleParentExpandedStateUpdate(false)}
            >
              <Center className="gap-2">
                <BsFillHouseFill />
                Home
              </Center>
            </Link>
          </div>

          <hr className="w-full" />

          <div className="flex flex-row justify-between">
            <Link
              href="../projects"
              className="flex flex-row navlink gap-2"
              onClick={() => handleParentExpandedStateUpdate(false)}
            >
              <Center className="gap-2">
                <BsCassette />
                Projects
              </Center>
            </Link>
            <Center className="mx-4">
              <button
                onClick={() =>
                  childExpanded !== 1
                    ? setChildExpanded(1)
                    : setChildExpanded(0)
                }
              >
                <BsChevronDown />
              </button>
            </Center>
          </div>
          <ChildContext.Provider value={childExpanded}>
            <div
              className={`${
                childExpanded === 1 ? "flex flex-col gap-2 py-2 mb-2" : "hidden"
              }`}
            >
              <Link
                href="../projects/music"
                onClick={() => {
                  handleParentExpandedStateUpdate(false);
                  setChildExpanded(0);
                }}
              >
                <div className="navlink-sub">Music</div>
              </Link>
              <Link
                href="../projects/paintings"
                onClick={() => {
                  handleParentExpandedStateUpdate(false);
                  setChildExpanded(0);
                }}
              >
                <div className="navlink-sub">Paintings</div>
              </Link>
            </div>
          </ChildContext.Provider>

          <hr className="w-full" />

          <div className="flex flex-row justify-between">
            <Link
              href="../about"
              className="flex flex-row navlink gap-2"
              onClick={() => handleParentExpandedStateUpdate(false)}
            >
              <Center className="gap-2">
                <BsInfoCircle />
                About
              </Center>
            </Link>
            <Center className="mx-4">
              <button
                onClick={() =>
                  childExpanded !== 2
                    ? setChildExpanded(2)
                    : setChildExpanded(0)
                }
              >
                <BsChevronDown />
              </button>
            </Center>
          </div>
          <ChildContext.Provider value={childExpanded}>
            <div
              className={`${
                childExpanded === 2 ? "flex flex-col gap-2 py-2 mb-2" : "hidden"
              }`}
            >
              <Link
                href="../about/site"
                onClick={() => {
                  handleParentExpandedStateUpdate(false);
                  setChildExpanded(0);
                }}
              >
                <div className="navlink-sub">About This Site</div>
              </Link>
              <Link
                href="../about/nick"
                onClick={() => {
                  handleParentExpandedStateUpdate(false);
                  setChildExpanded(0);
                }}
              >
                <div className="navlink-sub">About Nick</div>
              </Link>
            </div>
          </ChildContext.Provider>

          {/*   USE THIS ONCE GRANDCHILD SETSTATE INHERITENCE IS FIGURED OUT
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
          */}
        </div>
      </MobileMenuContext.Provider>
    </div>
  );
};

export default NavbarMobile;
