import React from "react";

type TechProps = {
  name: string;
  url: string;
  imgFile: string;
};

const TechCard = ({ name, url, imgFile }: TechProps) => {
  return (
    <li className="flex rounded-lg bg-slate-200">
      <img className="w-32 h-auto p-4" src={imgFile} alt={url} />
    </li>
  );
};

export default TechCard;
