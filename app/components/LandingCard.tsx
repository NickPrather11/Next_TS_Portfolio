import Link from "next/link";
import React from "react";
import Center from "./Center";
import Card from "./Card";

type LandingCardProps = {
  url: string;
  title: string;
  description: string;
  external: boolean;
};

const LandingCard = ({
  url,
  title,
  description,
  external,
}: LandingCardProps) => {
  return (
    <Card>
      <Center>
        <Link
          key={title}
          href={url}
          target={external ? "_blank" : "_self"}
          rel={external ? "noopener noreferrer" : ""}
          className="flex flex-col w-3/4 hover:bg-gray-800 lg:w-1/2"
        >
          <h3 className="text-center text-wrap">{title}</h3>
          <p className="text-center text-sm text-wrap">{description}</p>
        </Link>
      </Center>
    </Card>
  );
};

export default LandingCard;
