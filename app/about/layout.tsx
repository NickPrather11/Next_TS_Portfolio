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
      <div className="flex justify-center w-full bg-slate-700 bg-opacity-90">
        <h1 className="py-6">
          <Link href="/about" className="hover:text-slate-300">
            ABOUT
          </Link>
        </h1>
      </div>

      <hr className="mt-6 w-11/12 md:w-7/12" />

      <div className="flex flex-row flex-wrap justify-evenly w-full pt-2 md:justify-center md:gap-10 md:w-7/12">
        <Link
          onClick={() => setActiveLink(1)}
          href="/about/site"
          className={`tab-link ${
            activeLink === 1 ? "bg-slate-800 bg-opacity-70" : ""
          }`}
        >
          About This Site
        </Link>
        <Link
          onClick={() => setActiveLink(2)}
          href="/about/nick"
          className={`tab-link ${
            activeLink === 2 ? "bg-slate-800 bg-opacity-70" : ""
          }`}
        >
          About Nick
        </Link>
        <Link
          onClick={() => setActiveLink(3)}
          href="/about/music"
          className={`tab-link ${
            activeLink === 3 ? "bg-slate-800 bg-opacity-70" : ""
          }`}
        >
          Music
        </Link>
        <Link
          onClick={() => setActiveLink(4)}
          href="/about/paintings"
          className={`tab-link ${
            activeLink === 4 ? "bg-slate-800 bg-opacity-70" : ""
          }`}
        >
          Paintings
        </Link>
      </div>

      <Page className="lg:w-11/12">
        <Suspense fallback={<Loading />}>{children}</Suspense>
      </Page>
    </Page>
  );
}
