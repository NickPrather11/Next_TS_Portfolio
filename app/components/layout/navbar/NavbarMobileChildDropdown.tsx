import Link from "next/link";
import React from "react";
import { ChildDropdownLink } from "./NavbarMobileLink";
import Center from "../../util/Center";

interface ChildDropdownProps {
  dropdownContents: ChildDropdownLink[];
  onStateUpdates: (newStateValue: boolean) => void;
}

const NavbarMobileChildDropdown = ({
  dropdownContents,
  onStateUpdates,
}: ChildDropdownProps) => {
  return (
    <div>
      {dropdownContents.map((dropLink: ChildDropdownLink) => {
        return (
          <Link
            key={dropLink.name}
            href={dropLink.path}
            onClick={() => onStateUpdates(false)}
          >
            <div className="flex flex-row justify-start navlink-sub pl-4 gap-4">
              <Center>{dropLink.icon}</Center>
              <p>{dropLink.name}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default NavbarMobileChildDropdown;
