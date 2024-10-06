import React from "react";
import Center from "../components/util/Center";
import Link from "next/link";
import Card from "../components/util/Card";

const projectsPage = async () => {
  return (
    <Center className="flex-col md:flex-row md:flex-wrap">
      <Card>
        <Link href="/projects/music" className="flex flex-col items-center">
          <h3>Music</h3>
          <p>Check out my recording projects</p>
        </Link>
      </Card>
      <Card>
        <Link href="/projects/paintings" className="flex flex-col items-center">
          <h3>Paintings</h3>
          <p>Browse examples of my acrylic paintings</p>
        </Link>
      </Card>
    </Center>
  );
};

export default projectsPage;
