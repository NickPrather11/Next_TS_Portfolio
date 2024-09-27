import React from "react";
import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";

const Navbar = () => {
  return (
    <header className="flex flex-row top-0 w-full bg-gray-100 dark:bg-slate-900">
      <h2 className="p-4 mr-4 bg-black rounded-3xl">Nick Prather</h2>
      <NavbarMobile className="lg:hidden" />
      <NavbarDesktop className="lg:flex" />
    </header>
  );
};

export default Navbar;
