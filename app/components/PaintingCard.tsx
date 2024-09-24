import React from "react";
import Center from "./Center";

type PaintingProps = {
  path: string;
  title: string;
  dimensions: string;
};

const PaintingCard = ({ path, title, dimensions }: PaintingProps) => {
  return (
    <div
      key={path}
      className="card flex justify-center h-80 w-64 mx-9 my-7 hover:bg-gray-800"
    >
      <Center className="flex-col w-44">
        <img className="rounded-lg" src={path} alt="" />
        <Center className="flex-col">
          <div className="pt-3 text-center text-sm text-wrap">{title}</div>
          <div className="pt-1 text-center text-sm text-gray-400 text-wrap">
            {dimensions}
          </div>
        </Center>
      </Center>
    </div>
  );
};

export default PaintingCard;
