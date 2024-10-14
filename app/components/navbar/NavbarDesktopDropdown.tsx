import React, { ReactNode } from "react";
import Link from "next/link";
import Center from "../Center";
import { NavDropdownLink } from "./NavbarDesktopLink";

interface DropdownLinkProps {
  dropdownContents: NavDropdownLink[];
  onUpdateNavDeskLinkState: (newValue: boolean) => void;
}

const NavbarDesktopDropdown = ({
  dropdownContents,
  onUpdateNavDeskLinkState,
}: DropdownLinkProps) => {
  return (
    <div className="flex flex-col p-4 gap-4">
      {dropdownContents.map((dropLink: NavDropdownLink) => (
        <Link
          key={dropLink.text}
          href={dropLink.path}
          onClick={() => onUpdateNavDeskLinkState(false)}
        >
          <div
            className="flex flex-row justify-start gap-4 text-lg text-right text-white 
          hover:text-gray-500/75"
          >
            <Center>{dropLink.icon}</Center>
            <p>{dropLink.text}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default NavbarDesktopDropdown;
