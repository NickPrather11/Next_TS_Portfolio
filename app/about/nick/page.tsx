import React from "react";
import Card from "@/app/components/Card";
import Center from "@/app/components/Center";
import TOC from "./assets/TOC";
import ProfessionalExperience from "./assets/ProfessionalExperience";
import Education from "./assets/Education";
import LanguagesAndTech from "./assets/LanguagesAndTech";

const aboutNick = () => {
  return (
    <Center className="flex-col md:w-9/12">
      <Card>
        <h2 className="text-center">About Nick</h2>
        <p>
          Nick Prather is a full Stack Web Application Developer with a
          background in customer-facing project implementation - specializing in
          UI functionality and data transformation. Additional experience in API
          devlopment, people management, project management, technical writing,
          audio/video production and editing, and more.
        </p>
        <br></br>
        <br></br>
        <TOC />
        <hr className="my-10 w-full" />
        <ProfessionalExperience id="professional_experience" />
        <hr className="my-10 w-full" />
        <LanguagesAndTech id="languages_and_tech" />
        <hr className="my-10 w-full" />
        <Education id="education" />
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
      </Card>
    </Center>
  );
};

export default aboutNick;
