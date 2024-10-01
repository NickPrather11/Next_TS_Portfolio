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
        <h1 className="pt-6 pb-10">
          <Link href="/about">ABOUT</Link>
        </h1>
      </div>

      <hr className="mt-2 w-11/12 md:w-7/12" />

      <div className="flex flex-row justify-evenly w-full pt-2 md:justify-center md:gap-10 md:w-7/12">
        <Link
          onClick={() => setActiveLink(1)}
          href="/about/site"
          className={`internalLink ${
            activeLink === 1 ? "bg-slate-500 bg-opacity-50" : ""
          }`}
        >
          About This Site
        </Link>
        <Link
          onClick={() => setActiveLink(2)}
          href="/about/nick"
          className={`internalLink ${
            activeLink === 2 ? "bg-slate-500 bg-opacity-50" : ""
          }`}
        >
          About Nick
        </Link>
      </div>

      <Page className="w-11/12">
        <Suspense fallback={<Loading />}>{children}</Suspense>
      </Page>
    </Page>
  );
}
