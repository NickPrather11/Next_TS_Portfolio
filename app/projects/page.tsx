import React from "react";
import Center from "../components/util/Center";
import Link from "next/link";
import Card from "../components/util/Card";

const projectsPage = async () => {
  return (
    <Center className="flex-col md:flex-row md:flex-wrap">
      <Card>
        <p>Coming Soon</p>
      </Card>
    </Center>
  );
};

export default projectsPage;
