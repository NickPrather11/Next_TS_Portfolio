import React from "react";
import fs from "fs";
import PaintingCard from "@/app/components/PaintingCard";

const projectsPage = async () => {
  const paintings: string[] = fs.readdirSync("./public/paintings/");

  return (
    <div>
      <div className="flex flex-col items-center gap-4">
        <h3>Paintings</h3>
        <p className="italic text-sm">Original acrylic pour paintings.</p>
      </div>

      <ul className="flex flex-wrap justify-center mt-10">
        {paintings.map((painting: string) => (
          <li key={painting}>
            <PaintingCard fileName={painting} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default projectsPage;
