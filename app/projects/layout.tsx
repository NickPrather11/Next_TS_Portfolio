"use client";
import React, { Suspense, useState } from "react";
import Loading from "../components/LoadingComponent";
import Page from "../components/Page";
import Link from "next/link";

export default function ProjectsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [activeLink, setActiveLink] = useState(0);
  return (
    <Page>
      <h1>PROJECTS</h1>

      <hr className="w-11/12" />

      <div className="flex flex-row justify-evenly w-full pt-2">
        <Link
          onClick={() => setActiveLink(1)}
          href="/projects/music"
          className={`internalLink ${
            activeLink === 1 ? "activeProjectLink" : ""
          }`}
        >
          Music
        </Link>
        <Link
          onClick={() => setActiveLink(2)}
          href="/projects/paintings"
          className={`internalLink ${
            activeLink === 2 ? "activeProjectLink" : ""
          }`}
        >
          Paintings
        </Link>
      </div>

      <Page className="card w-4/5 rounded-2xl">
        <Suspense fallback={<Loading />}>{children}</Suspense>
      </Page>
    </Page>
  );
}
