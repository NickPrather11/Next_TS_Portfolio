import Link from "next/link";
import React from "react";
import Center from "./Center";

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
    <Link
      key={title}
      href={url}
      target={external ? "_blank" : "_self"}
      rel={external ? "noopener noreferrer" : ""}
      className="card flex flex-col w-3/4 hover:bg-gray-800 lg:w-1/2"
    >
      <b className="mb-4 text-center text-xl text-wrap">{title}</b>
      <p className="text-center text-sm text-wrap">{description}</p>
    </Link>
  );
};

export default LandingCard;
