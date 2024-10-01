import Card from "@/app/components/Card";
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
    <Center className="flex-col px-6 m-4">
      <Card className="md:w-8/12">
        <h2 className="text-center">About This Site</h2>

        <div id="about_site">
          <p>
            Thanks for checking out my portfolio! This site is a responsive
            React web application built with the Next.js framework in a Node
            environment using Typescript as the base language. Styling has been
            added using TailwindCSS. This site contains data retrieved from a
            MongoDB database using Mongoose.
            <br></br>
            <br></br>
            If you&apos;d like to check out the code repo for this site and see
            the updates I have planned, see the links below.
          </p>
        </div>

        <div className="flex flex-col gap-8 mt-8">
          <div className="flex flex-row flex-wrap gap-2">
            <p>Site Repo:</p>
            <Link
              href="https://github.com/NickPrather11/Next_TS_Portfolio"
              className="underline text-blue-500 hover:text-blue-700 visited:text-purple-600 w-full text-wrap break-words"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://github.com/NickPrather11/Next_TS_Portfolio
            </Link>
          </div>
          <div className="flex flex-row flex-wrap gap-2">
            <p>Planned Updates:</p>
            <Link
              href="https://github.com/users/NickPrather11/projects/1"
              className="underline text-blue-500 hover:text-blue-700 visited:text-purple-600 w-full text-wrap break-words"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://github.com/users/NickPrather11/projects/1
            </Link>
          </div>
        </div>
      </Card>

      <Card>
        <Center className="flex-col gap-8">
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
      </Card>
    </Center>
  );
};

export default aboutSite;
