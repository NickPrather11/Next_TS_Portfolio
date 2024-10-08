import React from "react";
import Card from "@/app/components/util/Card";
import Center from "@/app/components/util/Center";
import TOC from "./components/TOC";
import ProfessionalExperience from "./components/ProfessionalExperience";
import Education from "./components/Education";
import LanguagesAndTech from "./components/LanguagesAndTech";
import Link from "next/link";
import { FaArrowCircleUp } from "react-icons/fa";

const aboutNick = () => {
  return (
    <Center className="md:w-9/12">
      <Card className="flex flex-col">
        <h2 id="top" className="text-center">
          About Nick
        </h2>
        <p>
          Nick Prather is a full-stack web application developer with a
          background in customer-facing project implementation - specializing in
          UI functionality and data transformation. Additional experience in API
          development, people management, project management, technical writing,
          audio/video production and editing, and more.
        </p>
        <br></br>
        <br></br>
        <TOC />
        <hr className="my-10 w-full" />
        <ProfessionalExperience id="professional_experience" />
        <Link
          href="#top"
          className="link flex flex-row items-center self-end mt-12 gap-2"
        >
          Back To Top
          <FaArrowCircleUp />
        </Link>
        <hr className="my-10 w-full" />
        <LanguagesAndTech id="languages_and_tech" />
        <Link
          href="#top"
          className="link flex flex-row items-center self-end mt-12 gap-2"
        >
          Back To Top
          <FaArrowCircleUp />
        </Link>
        <hr className="my-10 w-full" />
        <Education id="education" />
        <Link
          href="#top"
          className="link flex flex-row items-center self-end mt-12 gap-2"
        >
          Back To Top
          <FaArrowCircleUp />
        </Link>
        <hr className="my-10 w-full" />
        <div id="additional_background" className="flex flex-col">
          <h3>Additional Background</h3>
        </div>
        <p>
          Nick is also a multi-instrumentalist musician, recording engineer,
          writer, and artist. He has worked in virtually every facet of the
          music industry: performing, composing, recording, teaching, instrument
          building and repair, equipment sales, studio consulting, and event
          management.
        </p>
        <Link
          href="#top"
          className="link flex flex-row items-center self-end mt-12 gap-2"
        >
          Back To Top
          <FaArrowCircleUp />
        </Link>
      </Card>
    </Center>
  );
};

export default aboutNick;
