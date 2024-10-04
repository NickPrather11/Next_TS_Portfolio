"use client";
import Link from "next/link";
import React, { createContext, useState } from "react";
import { BsChevronDown } from "react-icons/bs";

type ExpandedContextType = boolean;

const DropdownContext = createContext<ExpandedContextType>(false);

const TOC = () => {
  const [expandedTOC, setExpandedTOC] = useState<ExpandedContextType>(false);
  return (
    <div>
      <div className="flex flex-row items-center gap-4">
        <h3>Table of Contents</h3>
        <h3 onClick={() => setExpandedTOC((curr) => !curr)}>
          <BsChevronDown />
        </h3>
      </div>
      <DropdownContext.Provider value={expandedTOC}>
        <ul
          className={`${
            expandedTOC
              ? "flex flex-col pl-4 gap-2 list-disc [&_ul]:list-[revert] pb-4"
              : "hidden"
          }`}
        >
          <li>
            <Link href="#professional_experience" className="link">
              Professional Experience
            </Link>
          </li>
          <ul className="flex flex-col pl-8 gap-2">
            <li>
              <Link href="#f2b" className="link">
                Field2Base
              </Link>
            </li>
            <li>
              <Link href="#soundpure" className="link">
                SoundPure
              </Link>
            </li>
            <li>
              <Link href="#moog" className="link">
                Moog Music
              </Link>
            </li>
            <li>
              <Link href="#freelance_audio" className="link">
                Freelance Music and Audio
              </Link>
            </li>
          </ul>
          <li>
            <Link href="#languages_and_tech" className="link">
              Languages & Tech
            </Link>
          </li>
          <li>
            <Link href="#education" className="link">
              Education
            </Link>
          </li>
          <li>
            <Link href="#additional_background" className="link">
              Additional Background
            </Link>
          </li>
        </ul>
      </DropdownContext.Provider>
    </div>
  );
};

export default TOC;
