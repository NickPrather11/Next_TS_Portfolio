import React, { Suspense } from "react";
import Loading from "../../components/Loading";
import Page from "../../components/Page";

const AlbumsDiv = React.lazy(() => import("../../components/AlbumsDiv"));

const projectsPage = async () => {
  return (
    <Page>
      <h1>PROJECTS</h1>

      <div className="flex flex-col static w-4/5 p-5 rounded-2xl shadow-xl">
        <div className="flex flex-col items-center gap-4">
          <h3>Music</h3>
          <p className="italic text-sm">
            I have recorded a lot of music in my life. Here is what is currently
            available.
          </p>
        </div>

        <Suspense fallback={<Loading />}>
          <AlbumsDiv />
        </Suspense>
      </div>
    </Page>
  );
};

export default projectsPage;
