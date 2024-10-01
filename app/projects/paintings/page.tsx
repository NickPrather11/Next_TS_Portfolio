import React, { Suspense } from "react";
import fs from "fs";
import PaintingCard from "@/app/components/PaintingCard";
import Loading from "../loading";
import Card from "@/app/components/Card";

const projectsPage = async () => {
  const paintings: string[] = fs.readdirSync("./public/paintings/");

  return (
    <Card>
      <div className="flex flex-col items-center gap-4">
        <h3>Paintings</h3>
        <p className="italic text-sm">Original paintings (acrylic on canvas)</p>
      </div>

      <ul className="flex flex-wrap justify-center mt-10">
        {paintings.map((painting: string) => (
          <li key={painting}>
            <Suspense fallback={<Loading />}>
              <PaintingCard fileName={painting} />
            </Suspense>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default projectsPage;