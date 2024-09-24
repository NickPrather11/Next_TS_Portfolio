import React from "react";
import Link from "next/link";
import dbSeed from "../db/seeds/dbLogoSeed";
import TechCard from "../components/TechCard";
import Page from "../components/Page";
import Center from "../components/Center";

interface ILogo {
  name: string;
  url: string;
  imgFile: string;
}

/*
interface LogoArray {
  logos: ILogo[]
}


const getLogos = (): Promise<LogoArray> => {
  const arrLogos = dbSeed;

}
*/

const aboutPage = () => {
  const item: Array<ILogo> = dbSeed;
  return (
    <Page>
      <h1>ABOUT</h1>

      <Center className="flex-col gap-8">
        <div className="card w-4/5">
          <p className="font-bold text-lg text-center mb-8">About This Site</p>

          <div id="about_site">
            <p>
              This site is intended to be a portfolio website, as well as a
              living resume of sorts.
              <br></br>
              <br></br>
              In addition to displaying my past projects and work experience, I
              am providing access to the code repository and the project board
              used to track updates and bug fixes.
            </p>
          </div>

          <div id="site_links" className="flex flex-col gap-8 mt-8">
            <div className="flex flex-wrap gap-2">
              <p>Site Repo:</p>
              <Link
                href="https://github.com/NickPrather11/Next_TS_Portfolio"
                className="hyperlink w-full break-words"
                target="_blank"
              >
                https://github.com/NickPrather11/Next_TS_Portfolio
              </Link>
            </div>
            <div className="flex flex-wrap gap-2">
              <p>Planned Updates:</p>
              <Link
                href="https://github.com/users/NickPrather11/projects/1"
                className="hyperlink w-full break-words"
                target="_blank"
              >
                https://github.com/users/NickPrather11/projects/1
              </Link>
            </div>
          </div>
        </div>

        <div id="bio" className="card w-4/5">
          <p className="font-bold text-lg text-center mb-8">About Nick</p>
          <p>
            Nick Prather is a web developer, multi-instrumentalist musician,
            recording engineer, writer, and artist. With a Bachelor of Science
            in Music Technology from University of North Carolina at Asheville
            (2010), with a dual focus on Electronic Music Composition and Jazz.
            He has worked in virtually every facet of the music industry:
            performing, composing, recording, teaching, instrument building and
            repair, equipment sales, studio consulting, and event management.
            <br></br>
            <br></br>
            After completing a 6-month, in-person Full Stack Web Development
            Bootcamp at UNC Chapel Hill in 2019, he has been applying his
            talents, creativity, and focus to the world of web and software
            application development. From February 2020 until April 2024, he
            worked for Field2Base, Inc., an enterprise app development company
            located in the RTP area of North Carolina. Starting out as a
            Technical Implementation Engineer in the Professional Services
            (P.S.) Department, he utilized the Javascript and SQL coding skills
            he learned in bootcamp and quickly adapted to the demands of a
            client-facing project implementation position, while mastering the
            proprietary technology offered by Field2Base. By 2022, he was
            promoted to Senior P.S. Engineer after taking on more internal
            projects, including the creation of a suite of tutorial videos and
            interdepartmental process development, in addition to continued
            client-focused duties. By May of 2023, he had become P.S. Team Lead,
            the de facto Department Manager. This new position allowed Nick to
            grow as a leader who managed people, projects, and processes,
            sharing his expertise with the next generation of Technical
            Implementation Engineers.
            <br></br>
            <br></br>
            Having made the difficult decision to leave his career at Field2Base
            in March 2024, Nick has spent his time since focusing on personal
            and professional growth. This includes continuing to learn and apply
            new web development technologies (as exemplified by this website),
            working on art and music projects, and occasionally consulting for a
            few audio equipment manufacturing startups.
            <br></br>
            <br></br>
            For more information on Nick&apos;s career and projects, check out
            the links below.
          </p>
        </div>
      </Center>

      <Center id="tech_display" className="flex-col">
        <p className="italic text-sm mb-8 mt-24">
          This site was built using the following technologies
        </p>
        <ul className="flex flex-wrap justify-evenly items-center gap-16">
          {item.map((logo: ILogo) => (
            <div key={logo.name}>
              <TechCard
                name={logo.name}
                url={logo.url}
                imgFile={logo.imgFile}
              />
            </div>
          ))}
        </ul>
      </Center>
    </Page>
  );
};

export default aboutPage;
