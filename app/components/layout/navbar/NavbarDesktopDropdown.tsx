import Link from "next/link";
import React from "react";
import Center from "../../util/Center";

interface NavDropdownLink {
  path: string;
  text: string;
}

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
          <Center className="navlink text-sm">
            <p>{dropLink.text}</p>
          </Center>
        </Link>
      ))}
    </div>
  );
};

export default NavbarDesktopDropdown;
