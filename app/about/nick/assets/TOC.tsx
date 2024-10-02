import Link from "next/link";
import React from "react";

const TOC = () => {
  return (
    <div>
      <h3>Table of Contents</h3>
      <ul className="flex flex-col pl-4 gap-2 list-disc [&_ul]:list-[revert]">
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
    </div>
  );
};

export default TOC;
