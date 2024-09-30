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
      <h1>
        <Link href="/projects">PROJECTS</Link>
      </h1>

      <hr className="w-11/12" />

      <div className="flex flex-row justify-evenly w-full pt-2 md:justify-start md:gap-10 md:w-11/12">
        <Link
          onClick={() => setActiveLink(1)}
          href="/projects/music"
          className={`internalLink ${
            activeLink === 1 ? "bg-slate-500 bg-opacity-50" : ""
          }`}
        >
          Music
        </Link>
        <Link
          onClick={() => setActiveLink(2)}
          href="/projects/paintings"
          className={`internalLink ${
            activeLink === 2 ? "bg-slate-500 bg-opacity-50" : ""
          }`}
        >
          Paintings
        </Link>
      </div>

      <Page className="w-11/12">
        <Suspense fallback={<Loading />}>{children}</Suspense>
      </Page>
    </Page>
  );
}
