import React from "react";
import PaintingCard from "./PaintingCard";
import fs from "fs";

const PaintingsDiv = () => {
  const paintings: string[] = fs.readdirSync("./public/paintings/");
  return (
    <ul className="flex flex-wrap justify-center mt-10">
      {paintings.map((painting: string) => (
        <li key={painting}>
          <PaintingCard fileName={painting} />
        </li>
      ))}
    </ul>
  );
};

export default PaintingsDiv;
