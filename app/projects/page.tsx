import React from "react";
import Center from "../components/util/Center";
import dbProjectsSeed, { IProject } from "../db/seeds/dbProjectsSeed";
import CardLink from "../components/util/CardLink";
import Page from "../page";
import Card from "../components/util/Card";

const projectsPage = () => {
  const projects: IProject[] = dbProjectsSeed;
  return (
    <ul className="flex flex-col justify-center items-center md:flex-row md:flex-wrap">
      {projects.map((project: IProject, index: number) => (
        <li key={index}>
          <Center>
            <CardLink
              href={`/projects/${project.slug}`}
              target="_self"
              className=""
              title={project.title}
              description={project.descriptionShort}
              childImgPath={project.imgPath}
            />
          </Center>
        </li>
      ))}
      <li>
        <Card>
          <h3>More Projects Coming Soon!</h3>
        </Card>
      </li>
    </ul>
  );
};

export default projectsPage;
