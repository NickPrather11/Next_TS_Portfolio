import React from "react";
import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";

const Navbar = () => {
  return (
    <header className="flex flex-row top-0 w-full bg-slate-900">
      <h2 className="p-4 mb-0 bg-black rounded-3xl md:mr-4">Nick Prather</h2>
      <NavbarMobile className="lg:hidden" />
      <NavbarDesktop className="lg:flex" />
    </header>
  );
};

export default Navbar;
