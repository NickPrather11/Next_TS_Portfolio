import React from "react";
import Center from "../components/Center";
import CardLink from "../components/CardLink";

const aboutPage = () => {
  return (
    <Center className="flex-col md:flex-row md:flex-wrap">
      <CardLink
        href="/about/site"
        target="_self"
        title="About This Site"
        description="Learn more about how this site was created"
        className=""
        childImgPath={null}
      />

      <CardLink
        href="/about/nick"
        target="_self"
        title="About Nick"
        description="Learn more about Nick Prather"
        className=""
        childImgPath={null}
      />

      <CardLink
        href="/about/music"
        target="_self"
        title="Music"
        description="Check out my recording projects"
        className=""
        childImgPath={null}
      />

      <CardLink
        href="/about/paintings"
        target="_self"
        title="Paintings"
        description="Browse examples of my acrylic paintings"
        className=""
        childImgPath={null}
      />
    </Center>
  );
};

export default aboutPage;
