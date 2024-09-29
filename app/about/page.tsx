import React from "react";
import Link from "next/link";
import Center from "../components/Center";

const aboutPage = () => {
  return (
    <Center>
      <Link href="/about/site" className="card flex flex-col gap-4">
        <h3 className="text-nowrap">About This Site</h3>
        <p>Learn more about how this site was created</p>
      </Link>
      <Link href="/about/nick" className="card flex flex-col gap-4">
        <h3 className="text-nowrap">About Nick</h3>
        <p>Learn more about Nick Prather</p>
      </Link>
    </Center>
  );
};

export default aboutPage;
