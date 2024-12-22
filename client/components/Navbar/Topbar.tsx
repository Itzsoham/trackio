"use client";

import { Menu, Moon, Search, Settings, Sun } from "lucide-react";
import Link from "next/link";
import { useTheme } from "next-themes";
import React from "react";

import { useAppDispatch, useAppSelector } from "@/app/redux";
import { setIsSidebarCollapsed } from "@/state";

const Topbar = () => {
  const { theme, setTheme } = useTheme();
  console.log(theme);

  const dispatch = useAppDispatch();
  const isSidebarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed
  );

  return (
    <div className="flex items-center justify-between bg-white px-4 py-3 dark:bg-black">
      {/* Searchbar */}
      <div className="flex items-center gap-8">
        {isSidebarCollapsed ? (
          <button
            onClick={() => dispatch(setIsSidebarCollapsed(!isSidebarCollapsed))}
          >
            <Menu className="size-6 dark:text-white" />
          </button>
        ) : null}
        <div className="relative flex h-min w-[200px]">
          <Search className="absolute left-[4px] top-1/2 mr-2 size-5 -translate-y-1/2 cursor-pointer dark:text-white" />
          <input
            type="search"
            className="w-full rounded border-none bg-gray-100 p-2 pl-8 placeholder:text-gray-500 focus:border-transparent focus:outline-none dark:bg-gray-700 dark:text-white dark:placeholder:text-white"
            placeholder="Search..."
          />
        </div>
      </div>
      {/* Icons  */}
      <div className="flex items-center">
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className={
            theme === "dark"
              ? `rounded p-2 dark:hover:bg-gray-700`
              : `rounded p-2 hover:bg-gray-100`
          }
        >
          {theme === "dark" ? (
            <Sun className="size-6 cursor-pointer dark:text-white" />
          ) : (
            <Moon className="size-6 cursor-pointer dark:text-white" />
          )}
        </button>
        <Link
          href="/settings"
          className={
            theme === "dark"
              ? `size-min rounded p-2 dark:hover:bg-gray-700`
              : `size-min rounded p-2 hover:bg-gray-100`
          }
        >
          <Settings className="size-6 cursor-pointer dark:text-white" />
        </Link>
        <div className="ml-2 mr-5 hidden min-h-[2em] w-[0.1rem] bg-gray-200 md:inline-block"></div>
      </div>
    </div>
  );
};

export default Topbar;
