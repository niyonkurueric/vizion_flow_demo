"use client";
import { FC, PropsWithChildren, useState } from "react";
import DashboardNavbar from "./components/DashboardNavbar";
import Sidebar from "./components/Sidebar";

const DashboardLayout: FC<PropsWithChildren<unknown>> = ({ children }) => {
  return (
    <div className="flex h-full min-h-screen">
      <Sidebar />
      <div className="w-full">
        <DashboardNavbar />
        <div className="pl-5">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
