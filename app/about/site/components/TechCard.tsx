import React from "react";

type TechProps = {
  name: string;
  url: string;
  imgFile: string;
};

const TechCard = ({ name, url, imgFile }: TechProps) => {
  return (
    <li className="flex m-2 rounded-lg bg-slate-200">
      <img className="p-2 w-24 md:w-32 " src={imgFile} alt={url} />
    </li>
  );
};

export default TechCard;
