import React, { Suspense } from "react";
import Loading from "../../components/Loading";
import Page from "../../components/Page";
import PaintingsDiv from "@/app/components/PaintingsDiv";

const projectsPage = async () => {
  return (
    <Page>
      <h1>PROJECTS</h1>

      <div className="flex flex-col static w-4/5 p-5 rounded-2xl shadow-xl">
        <div className="flex flex-col items-center gap-4">
          <h3>Paintings</h3>
          <p className="italic text-sm">Original acrylic pour paintings.</p>
        </div>

        <Suspense fallback={<Loading />}>
          <PaintingsDiv />
        </Suspense>
      </div>
    </Page>
  );
};

export default projectsPage;
