import Link from "next/link";
import React from "react";

interface ChildDropdownLinkProps {
  name: string;
  path: string;
}

interface ChildDropdownProps {
  dropdownContents: ChildDropdownLinkProps[];
  onStateUpdates: (newStateValue: boolean) => void;
}

const NavbarMobileChildDropdown = ({
  dropdownContents,
  onStateUpdates,
}: ChildDropdownProps) => {
  return (
    <div>
      {dropdownContents.map((dropLink: ChildDropdownLinkProps) => {
        return (
          <Link
            key={dropLink.name}
            href={dropLink.path}
            onClick={() => onStateUpdates(false)}
          >
            <div className="navlink-sub">{dropLink.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default NavbarMobileChildDropdown;
