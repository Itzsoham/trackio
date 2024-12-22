import React from "react";

import Sidebar from "@/components/Navbar/Sidebar";
import Topbar from "@/components/Navbar/Topbar";

import StoreProvider from "../redux";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen w-full bg-gray-50 text-gray-900">
      <StoreProvider>
        <Sidebar />
        <main className="flex w-full flex-col bg-gray-50 dark:bg-dark-bg">
          <Topbar />
          {children}
        </main>
      </StoreProvider>
    </div>
  );
};

export default RootLayout;
