import React, { Suspense } from "react";
import Loading from "../../components/Loading";
import Page from "../../components/Page";

const AlbumsDiv = React.lazy(() => import("../../components/AlbumsDiv"));

const projectsPage = async () => {
  return (
    <div>
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
  );
};

export default projectsPage;
