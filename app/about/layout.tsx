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
        <Link href="/about">ABOUT</Link>
      </h1>

      <hr className="w-11/12" />

      <div className="flex flex-row justify-evenly w-full pt-2">
        <Link
          onClick={() => setActiveLink(1)}
          href="/about/site"
          className={`internalLink ${
            activeLink === 1 ? "activeProjectLink" : ""
          }`}
        >
          This Site
        </Link>
        <Link
          onClick={() => setActiveLink(2)}
          href="/about/nick"
          className={`internalLink ${
            activeLink === 2 ? "activeProjectLink" : ""
          }`}
        >
          Nick
        </Link>
      </div>

      <Page className="w-4/5">
        <Suspense fallback={<Loading />}>{children}</Suspense>
      </Page>
    </Page>
  );
}
