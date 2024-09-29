import Center from "@/app/components/Center";
import TechCard from "@/app/components/TechCard";
import dbSeed from "@/app/db/seeds/dbLogoSeed";
import Link from "next/link";
import React from "react";

interface ILogo {
  name: string;
  url: string;
  imgFile: string;
}

const aboutSite = () => {
  const item: Array<ILogo> = dbSeed;
  return (
    <Center className="flex flex-col">
      <div className="card w-4/5">
        <p className="font-bold text-lg text-center mb-8">About This Site</p>

        <div id="about_site">
          <p>
            This site is intended to be a portfolio website, as well as a living
            resume. Keep checking back for more updates!
            <br></br>
            <br></br>
            In addition to displaying my past projects and work experience, I am
            providing access to the code repository and the project board used
            to track updates and bug fixes.
          </p>
        </div>

        <div id="site_links" className="flex flex-col gap-8 mt-8">
          <div className="flex flex-wrap gap-2">
            <p>Site Repo:</p>
            <Link
              href="https://github.com/NickPrather11/Next_TS_Portfolio"
              className="hyperlink w-full break-words"
              target="_blank"
              rel="noopener noreferrer"
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
              rel="noopener noreferrer"
            >
              https://github.com/users/NickPrather11/projects/1
            </Link>
          </div>
        </div>
      </div>

      <Center id="tech_display" className="flex-col card gap-8">
        <p className="italic text-sm">
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
    </Center>
  );
};

export default aboutSite;
