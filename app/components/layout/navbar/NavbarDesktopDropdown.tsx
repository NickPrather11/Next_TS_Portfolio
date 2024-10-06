import React, { ReactNode } from "react";
import Link from "next/link";
import Center from "../../util/Center";
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
    <div className="dropdown">
      {dropdownContents.map((dropLink: NavDropdownLink) => (
        <Link
          key={dropLink.text}
          href={dropLink.path}
          onClick={() => onUpdateNavDeskLinkState(false)}
        >
          <div className="flex flex-row justify-start navlink text-sm gap-4">
            <Center>{dropLink.icon}</Center>
            <p>{dropLink.text}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default NavbarDesktopDropdown;
