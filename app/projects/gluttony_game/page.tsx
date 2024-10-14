import React from "react";
import { IProject } from "@/app/db/seeds/dbProjectsSeed";
import Link from "next/link";
import Card from "@/app/components/Card";
import Center from "@/app/components/Center";

const gluttonyGamePage = () => {
  const project: IProject = {
    slug: "gluttony_game",
    imgPath: "/projectImages/Gluttony_Game.PNG",
    hrefDeployed: "https://nickprather11.github.io/unit-4-game/",
    hrefRepo: "https://github.com/NickPrather11/unit-4-game",
    title: "Gluttony! Game",
    descriptionShort: "Memory game with a hedonistic theme...",
    descriptionExtended:
      "You will be given a random number at the start of the game. This represents your ideal, transcendental buzz acquired from gobbling down all the items. There are five items below that will help you reach your goal, each item worth a random value. By clicking on the items, your score will increase by this random value. You must reach your goal number to win, going above this number causes you to get sick and lose. Each time the game starts, you goal number and the random values change!",
  };

  return (
    <Center className="flex flex-col mt-4 w-11/12">
      <img src={project.imgPath} alt="" className="lg:w-1/2" />
      <Card className="flex flex-col gap-4 lg:w-1/2">
        <h3>{project.title}</h3>
        <div>
          <div className="flex flex-row flex-wrap">
            <h5 className="mr-4">Deployed Link:</h5>
            <Link
              href={project.hrefDeployed}
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              <h5>{project.hrefDeployed}</h5>
            </Link>
          </div>
          <div className="flex flex-row flex-wrap">
            <h5 className="mr-4">Project Repo:</h5>
            <Link
              href={project.hrefRepo}
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              <h5>{project.hrefRepo}</h5>
            </Link>
          </div>
        </div>
        <p className="">{project.descriptionExtended}</p>
      </Card>
    </Center>
  );
};

export default gluttonyGamePage;
