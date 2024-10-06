import React from "react";
import Link from "next/link";
import Center from "../components/util/Center";
import Card from "../components/util/Card";

const aboutPage = () => {
  return (
    <Center className="flex-col md:flex-row md:flex-wrap">
      <Card>
        <Link href="/about/site" className="flex flex-col items-center">
          <h3 className="text-nowrap">About This Site</h3>
          <p>Learn more about how this site was created</p>
        </Link>
      </Card>
      <Card>
        <Link href="/about/nick" className="flex flex-col items-center">
          <h3 className="text-nowrap">About Nick</h3>
          <p>Learn more about Nick Prather</p>
        </Link>
      </Card>
      <Card>
        <Link href="/about/music" className="flex flex-col items-center">
          <h3>Music</h3>
          <p>Check out my recording projects</p>
        </Link>
      </Card>
      <Card>
        <Link href="/about/paintings" className="flex flex-col items-center">
          <h3>Paintings</h3>
          <p>Browse examples of my acrylic paintings</p>
        </Link>
      </Card>
    </Center>
  );
};

export default aboutPage;
