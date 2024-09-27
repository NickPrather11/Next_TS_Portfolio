"use client";
import React, { createContext, useState } from "react";
import { BsChevronDown, BsList } from "react-icons/bs";
import Link from "next/link";
import Center from "./Center";

type ExpandedContextType = boolean;
type ProjectsExpandedContextType = boolean;

const MobileMenuContext = createContext<ExpandedContextType>(false);
const ProjectsContext = createContext<ProjectsExpandedContextType>(false);

const NavbarMobile = ({ className }: any) => {
  const [expanded, setExpanded] = useState<ExpandedContextType>(false);
  const [projectsExpanded, setProjectsExpanded] =
    useState<ProjectsExpandedContextType>(false);
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
          <Link
            href="../"
            className="navlink"
            onClick={() => setExpanded((curr) => !curr)}
          >
            Home
          </Link>
          <hr className="w-full" />
          <div
            className="flex flex-row py-4 pl-4 text-lg text-gray-700 
          dark:text-white"
            onClick={() => setProjectsExpanded((curr) => !curr)}
          >
            <p>Projects</p>
            <Center className="mx-4">
              <BsChevronDown />
            </Center>
          </div>
          <ProjectsContext.Provider value={expanded}>
            <div className={`${projectsExpanded ? "flex flex-col" : "hidden"}`}>
              <Link
                href="../projects/music"
                className="navlink-sub"
                onClick={() => {
                  setExpanded((curr) => !curr);
                  setProjectsExpanded((curr) => !curr);
                }}
              >
                Music
              </Link>
              <Link
                href="../projects/paintings"
                className="navlink-sub"
                onClick={() => {
                  setExpanded((curr) => !curr);
                  setProjectsExpanded((curr) => !curr);
                }}
              >
                Paintings
              </Link>
            </div>
          </ProjectsContext.Provider>
          <hr className="w-full" />
          <Link
            href="../about"
            className="navlink"
            onClick={() => setExpanded((curr) => !curr)}
          >
            About
          </Link>
        </div>
      </MobileMenuContext.Provider>
    </div>
  );
};

export default NavbarMobile;
