import React from "react";
import Center from "../components/Center";
import Link from "next/link";

const projectsPage = async () => {
  return (
    <Center>
      <Link href="/projects/music" className="card flex flex-col gap-4">
        <h3>Music</h3>
        <p>Check out my recording projects</p>
      </Link>
      <Link href="/projects/paintings" className="card flex flex-col gap-4">
        <h3>Paintings</h3>
        <p>Browse examples of my acrylic paintings</p>
      </Link>
    </Center>
  );
};

export default projectsPage;
