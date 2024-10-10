import React from "react";
import { IProject } from "@/app/db/seeds/dbProjectsSeed";
import Link from "next/link";
import Card from "@/app/components/util/Card";
import Center from "@/app/components/util/Center";

const lebowskiTriviaPage = () => {
  const project: IProject = {
    slug: "lebowski_trivia",
    imgPath: "/projectImages/Lebowski_Trivia.PNG",
    hrefDeployed: "https://nickprather11.github.io/TriviaGame/",
    hrefRepo: "https://github.com/NickPrather11/TriviaGame",
    title: "Lebowski Trivia",
    descriptionShort: "Trivia game based on the movie 'The Big Lebowski'",
    descriptionExtended:
      "This is a trivia game involving the film 'The Big Lebowski'. You have 120 seconds to answer all 15 questions. When you are finished answering, just hit the 'submit' button. If you run out of time, any unanswered questions will be counted as incorrect. When you are finished, you'll be directed to a page displaying your score as 'n/15'. Any questions answered incorrectly will be shown with your answer (marked as incorrect) and the correct answer. Click the 'Try Again' button to take the quiz again!",
  };

  return (
    <Center className="flex flex-col mt-4">
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

export default lebowskiTriviaPage;
