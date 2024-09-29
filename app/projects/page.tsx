import React, { Suspense } from "react";
import Loading from "../components/LoadingComponent";
import Page from "../components/Page";
import Center from "../components/Center";
import Link from "next/link";

const projectsPage = async () => {
  return (
    <Center>
      <div className="card flex flex-col gap-4">
        <h3>Music</h3>
        <p>Check out my recording projects</p>
      </div>
      <div className="card flex flex-col gap-4">
        <h3>Paintings</h3>
        <p>Browse examples of my acrylic paintings</p>
      </div>
    </Center>
  );
};

export default projectsPage;
