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
      {dropdownContents.map((dropLink: ChildDropdownLink, index: number) => {
        return (
          <Link
            key={index}
            href={dropLink.path}
            className="p-4"
            onClick={() => onStateUpdates(false)}
          >
            <div
              className="flex flex-row justify-start mx-4 pl-4 gap-4 text-xl text-right text-white 
          hover:text-gray-500/75"
            >
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
