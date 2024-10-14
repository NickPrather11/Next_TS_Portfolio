import React from "react";
import NavbarDesktopLink from "./NavbarDesktopLink";
import {
  BsCassette,
  BsFillHouseFill,
  BsInfoCircle,
  BsPalette,
  BsPersonRaisedHand,
  BsTools,
  BsWindow,
} from "react-icons/bs";

const NavbarDesktop = ({ className }: any) => {
  return (
    <div className={`hidden items-center gap-4 ${className}`}>
      <NavbarDesktopLink
        path="../"
        name="Home"
        icon={<BsFillHouseFill />}
        dropdownBool={false}
        dropdownContents={[]}
      />

      <NavbarDesktopLink
        path="../projects"
        name="Projects"
        icon={<BsTools />}
        dropdownBool={false}
        dropdownContents={[]}
      />

      <NavbarDesktopLink
        path="../about"
        name="About"
        icon={<BsInfoCircle />}
        dropdownBool={true}
        dropdownContents={[
          {
            path: "../about/site",
            text: "About This Site",
            icon: <BsWindow />,
          },
          {
            path: "../about/nick",
            text: "About Nick",
            icon: <BsPersonRaisedHand />,
          },
          {
            path: "../about/music",
            text: "Music",
            icon: <BsCassette />,
          },
          {
            path: "../about/paintings",
            text: "Paintings",
            icon: <BsPalette />,
          },
        ]}
      />

      {/*<NavbarDesktopLink path="../contact" text="Contact" icon={<BsEnvelope />} dropdown={false} dropdownProps={[]} />*/}

      {/* 
        <NavbarDesktopLink
          path="../login"
          text="Login"
          icon={<BsPersonCircle />}
          dropdown={false}
          dropdownProps={[]}
        />
        */}
    </div>
  );
};

export default NavbarDesktop;
