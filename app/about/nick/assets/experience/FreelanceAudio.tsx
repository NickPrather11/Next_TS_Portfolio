import React from "react";

const FreelanceAudio = ({ ...props }: any) => {
  return (
    <div {...props}>
      <div className="flex flex-col xl:flex-row lg:justify-between 2xl:w-6/12">
        <h4 className="mb-0">Freelance Music and Audio Work</h4>
        <h5>2005 - 2020</h5>
      </div>
      <p>
        Working with musicians in a wide range of genre, skill, and professional
        level. Teaching guitar, bass, drums, synthesizer, piano, and music
        theory to students ages 5-50.
      </p>
      <p className="pt-2">JOB DESCRIPTION</p>
    </div>
  );
};

export default FreelanceAudio;
