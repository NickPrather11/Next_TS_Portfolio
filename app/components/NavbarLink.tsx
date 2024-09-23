import React, { ReactNode } from "react";
import Link from "next/link";
import Center from "./Center";

type NavLinkProps = {
  path: string;
  text: string;
  icon: ReactNode;
};

const NavbarLink = ({ path, text, icon }: NavLinkProps) => {
  return (
    <Link href={path} className="mx-4">
      <Center className="gap-2 text-lg text-gray-500 dark:text-white hover:text-gray-500/75">
        {icon}
        <p>{text}</p>
      </Center>
    </Link>
  );
};

export default NavbarLink;
