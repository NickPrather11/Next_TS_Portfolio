import React from "react";
import Link from "next/link";
import Center from "./Center";

type MobileNavLinkProps = {
  path: string;
  text: string;
};

const MobileNavLink = ({ path, text }: MobileNavLinkProps) => {
  return (
    <Link href={path}>
      <Center className="p-2 m-2 text-lg text-gray-700 dark:text-white hover:text-gray-500/75">
        <p>{text}</p>
      </Center>
    </Link>
  );
};

export default MobileNavLink;
