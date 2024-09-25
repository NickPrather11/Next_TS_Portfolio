import React, { Suspense } from "react";
import Loading from "../components/Loading";
import Page from "../components/Page";
import Center from "../components/Center";
import Link from "next/link";
import { Outlet, Route, Routes } from "react-router-dom";

const AlbumsDiv = React.lazy(() => import("../components/AlbumsDiv"));

const projectsPage = async () => {
  return <div className="flex flex-grow min-h-full"></div>;
};

export default projectsPage;
