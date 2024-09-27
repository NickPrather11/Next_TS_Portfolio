"use client";
import React, { createContext, ReactNode, useState } from "react";
import Link from "next/link";
import Center from "./Center";
import { BsChevronDown } from "react-icons/bs";
import NavDropdown from "./NavDropdown";

interface NavDropdownLink {
  path: string;
  text: string;
}

interface NavLinkProps {
  path: string;
  name: string;
  icon: ReactNode;
  dropdown: boolean;
  dropdownProps: NavDropdownLink[];
}

type ExpandedContextType = boolean;

const DropdownContext = createContext<ExpandedContextType>(false);

const NavbarDesktopLink = ({
  path,
  name,
  icon,
  dropdown,
  dropdownProps,
}: NavLinkProps) => {
  const [expanded, setExpanded] = useState<ExpandedContextType>(false);

  const handleExpandedStateUpdate = (newValue: boolean) => {
    setExpanded(newValue);
  };

  return (
    <div>
      <Center className="flex-row">
        <Link href={path} className="mx-4">
          <Center className="gap-2 text-lg text-gray-500 dark:text-white hover:text-gray-500/75">
            {icon}
            <p>{name}</p>
          </Center>
        </Link>

        {dropdown ? (
          <Center>
            <button onClick={() => setExpanded((curr) => !curr)}>
              <BsChevronDown />
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
              ? "flex flex-col absolute mt-2 px-2 rounded-xl border border-slate-200 bg-gray-100 dark:bg-slate-900"
              : "hidden"
          }`}
        >
          <NavDropdown
            dropdownProps={dropdownProps}
            onUpdateNavDeskLinkState={handleExpandedStateUpdate}
          />
        </div>
      </DropdownContext.Provider>
    </div>
  );
};

export default NavbarDesktopLink;
