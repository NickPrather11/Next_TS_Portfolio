import React from "react";
import PaintingCard from "./PaintingCard";

interface IPainting {
  path: string;
  title: string;
  dimensions: string;
}

interface PaintingArray {
  paintings: IPainting[];
}

const getPaintings = async (): Promise<PaintingArray> => {
  const res = await fetch(process.env.PATH_URI + "/api/albums", {
    cache: "no-store",
  });

  if (!res.ok) {
    console.log("Failed to fetch albums");
  }

  return res.json();
};

const PaintingsDiv = async () => {
  const { paintings } = await getPaintings();
  return (
    <ul className="flex flex-wrap justify-center my-10 mx-80 sm:my-2 sm:mx-4">
      {paintings.map((painting: IPainting) => (
        <li key={painting.path}>
          <PaintingCard
            path={painting.path}
            title={painting.title}
            dimensions={painting.dimensions}
          />
        </li>
      ))}
    </ul>
  );
};

export default PaintingsDiv;
