import Link from "next/link";
import React from "react";
import Center from "./Center";

interface NavDropdownLink {
  path: string;
  text: string;
}

interface DropdownLinkProps {
  dropdownProps: NavDropdownLink[];
  onUpdateNavDeskLinkState: (newValue: boolean) => void;
}

const NavDropdown = ({
  dropdownProps,
  onUpdateNavDeskLinkState,
}: DropdownLinkProps) => {
  return (
    <div className="dropdown">
      {dropdownProps.map((dropLink: NavDropdownLink) => (
        <Link
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

export default NavDropdown;
