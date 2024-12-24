"use client";

import React from "react";

import Sidebar from "@/components/Navbar/Sidebar";
import Topbar from "@/components/Navbar/Topbar";

import { useAppSelector } from "./redux";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  const isSidebarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed
  );

  return (
    <div className="flex min-h-screen w-full bg-gray-50 text-gray-900">
      <Sidebar />
      <main
        className={`flex w-full flex-col bg-gray-50 dark:bg-dark-bg ${
          isSidebarCollapsed ? "" : "md:pl-64"
        }`}
      >
        <Topbar />
        {children}
      </main>
    </div>
  );
};

export default AppLayout;
