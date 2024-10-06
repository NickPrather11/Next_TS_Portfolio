"use client";
import React, { createContext, ReactNode, useState } from "react";
import Link from "next/link";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import NavbarDesktopDropdown from "./NavbarDesktopDropdown";
import Center from "../../util/Center";

interface NavDropdownLink {
  path: string;
  text: string;
}

interface NavLinkProps {
  path: string;
  name: string;
  icon: ReactNode;
  dropdownBool: boolean;
  dropdownContents: NavDropdownLink[];
}

type ExpandedContextType = boolean;

const DropdownContext = createContext<ExpandedContextType>(false);

const NavbarDesktopLink = ({
  path,
  name,
  icon,
  dropdownBool,
  dropdownContents,
}: NavLinkProps) => {
  const [expanded, setExpanded] = useState<ExpandedContextType>(false);

  const handleExpandedStateUpdate = (newValue: boolean) => {
    setExpanded(newValue);
  };

  return (
    <div>
      <Center className="flex-row">
        <Link href={path} className="mx-4">
          <Center className="gap-2 text-lg text-white hover:text-gray-500/75">
            {icon}
            <p>{name}</p>
          </Center>
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
              ? "flex flex-col absolute mt-2 px-2 rounded-xl border border-slate-200 bg-slate-900"
              : "hidden"
          }`}
        >
          <NavbarDesktopDropdown
            dropdownContents={dropdownContents}
            onUpdateNavDeskLinkState={handleExpandedStateUpdate}
          />
        </div>
      </DropdownContext.Provider>
    </div>
  );
};

export default NavbarDesktopLink;
