import React, { Suspense } from "react";
import Loading from "../components/Loading";
import Page from "../components/Page";
import Center from "../components/Center";
import Link from "next/link";
import { Outlet, Route, Routes } from "react-router-dom";

const AlbumsDiv = React.lazy(() => import("../components/AlbumsDiv"));

const projectsPage = async () => {
  return (
    <Page>
      <h1>PROJECTS</h1>

      <hr className="w-11/12" />

      <div className="w-full flex flex-row justify-evenly">
        <Link href="" className="p-2 text-center rounded-lg hover:bg-slate-600">
          Music
        </Link>
        <Link href="" className="p-2 text-center rounded-lg hover:bg-slate-600">
          Paintings
        </Link>
      </div>

      <div className="flex flex-col static w-4/5 p-5 rounded-2xl">
        <div className="flex flex-col items-center gap-4">
          <h3>Recordings</h3>
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
