import React from "react";
import Link from "next/link";
import dbSeed from "../db/seeds/dbLogoSeed";
import TechCard from "../components/TechCard";
import Page from "../components/Page";
import Center from "../components/Center";

const aboutPage = () => {
  return (
    <Center>
      <div className="card flex flex-col gap-4">
        <h3 className="text-nowrap">About This Site</h3>
        <p>Learn more about how this site was created</p>
      </div>
      <div className="card flex flex-col gap-4">
        <h3 className="text-nowrap">About Nick</h3>
        <p>Learn more about Nick Prather</p>
      </div>
    </Center>
  );
};

export default aboutPage;
