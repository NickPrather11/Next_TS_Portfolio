"use client";
import React, { createContext, ReactNode, useState } from "react";
import Link from "next/link";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import NavbarDesktopDropdown from "./NavbarDesktopDropdown";
import Center from "../Center";

export interface NavDropdownLink {
  path: string;
  text: string;
  icon: ReactNode;
}

interface NavLinkProps {
  path: string;
  name: string;
  icon: ReactNode;
  dropdownBool: boolean;
  dropdownContents: NavDropdownLink[];
  handleActiveLink: (newValue: string) => void;
}

const DropdownContext = createContext<boolean>(false);

const NavbarDesktopLink = ({
  path,
  name,
  icon,
  dropdownBool,
  dropdownContents,
  handleActiveLink,
}: NavLinkProps) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandedStateUpdate = (newValue: boolean) => {
    setExpanded(newValue);
  };

  return (
    <div>
      <Center className="my-2">
        <Link href={path} className="mx-2 ">
          <button onClick={() => handleActiveLink(name)}>
            <Center className="gap-2 text-lg text-white hover:text-gray-500/75">
              {icon}
              <p>{name}</p>
            </Center>
          </button>
        </Link>

        {dropdownBool ? (
          <Center>
            <button onClick={() => setExpanded((curr) => !curr)}>
              {expanded ? <BsChevronUp /> : <BsChevronDown />}
            </button>
          </Center>
        ) : (
          ""
        )}
      </Center>

      {/* Dropdown Menu */}
      <DropdownContext.Provider value={expanded}>
        <div
          className={`${
            expanded
              ? "flex flex-col absolute z-50 mt-2 px-2 rounded-xl border border-slate-200 bg-slate-900"
              : "hidden"
          }`}
        >
          <NavbarDesktopDropdown
            dropdownContents={dropdownContents}
            handleExpanded={handleExpandedStateUpdate}
            handleActiveLink={handleActiveLink}
            rootLinkName={name}
          />
        </div>
      </DropdownContext.Provider>
    </div>
  );
};

export default NavbarDesktopLink;
