"use client";
import React, { Suspense, useState } from "react";
import Loading from "../components/LoadingComponent";
import Page from "../components/Page";
import Link from "next/link";

interface ILinkProps {
  href: string;
  linkText: string;
}

export default function ProjectsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [activeLink, setActiveLink] = useState(0);

  const linkProps: ILinkProps[] = [
    {
      href: "/about/site",
      linkText: "About This Site",
    },
    {
      href: "/about/nick",
      linkText: "About Nick",
    },
    {
      href: "/about/music",
      linkText: "Music",
    },
    {
      href: "/about/paintings",
      linkText: "Paintings",
    },
  ];

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
        {linkProps.map((link: ILinkProps, index: number) => (
          <Link
            key={index}
            onClick={() => setActiveLink(index + 1)}
            href={link.href}
            className={`tab-link ${
              activeLink === index + 1 ? "bg-slate-800 bg-opacity-70" : ""
            }`}
          >
            {link.linkText}
          </Link>
        ))}
      </div>

      <Page className="lg:w-11/12">
        <Suspense fallback={<Loading />}>{children}</Suspense>
      </Page>
    </Page>
  );
}
