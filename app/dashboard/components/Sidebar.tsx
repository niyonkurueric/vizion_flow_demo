"use client";
import Link from "next/link";
import { useState } from "react";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div
      className={`sticky top-0 h-full min-h-screen flex flex-col bg-clip-border bg-white text-gray-700 w-full shadow-xl transition-all duration-200 shadow-blue-gray-900/5 ${
        isSidebarOpen ? "max-w-[18rem] " : "max-w-[3.5rem]"
      }`}
    >
      <div className="absolute top-4 right-0">
        <button className="btn btn-square btn-ghost" onClick={toggleSidebar}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-5 w-5 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
      <div>
        <div className="p-4 mb-2">
          <h5
            className={`block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-gray-900 ${
              isSidebarOpen ? "block" : "hidden"
            }`}
          >
            VizionFlow
          </h5>
        </div>
        <nav
          className={`flex flex-col gap-1 p-2 font-sans text-base font-normal text-gray-700 ${
            isSidebarOpen ? "mt-0" : "mt-9"
          }`}
        >
          <Link
            href="/dashboard"
            role="button"
            tabIndex={0}
            className="flex items-center w-full p-3 leading-tight rounded-lg outline-none text-start transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900"
          >
            <div className="mr-4 grid place-items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M2.25 2.25a.75.75 0 000 1.5H3v10.5a3 3 0 003 3h1.21l-1.172 3.513a.75.75 0 001.424.474l.329-.987h8.418l.33.987a.75.75 0 001.422-.474l-1.17-3.513H18a3 3 0 003-3V3.75h.75a.75.75 0 000-1.5H2.25zm6.04 16.5l.5-1.5h6.42l.5 1.5H8.29zm7.46-12a.75.75 0 00-1.5 0v6a.75.75 0 001.5 0v-6zm-3 2.25a.75.75 0 00-1.5 0v3.75a.75.75 0 001.5 0V9zm-3 2.25a.75.75 0 00-1.5 0v1.5a.75.75 0 001.5 0v-1.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <span className={`${isSidebarOpen ? "block" : "hidden"}`}>Dashboard</span>
          </Link>
          <Link
            href={`/dashboard/customers`}
            role="button"
            tabIndex={0}
            className="flex items-center w-full p-3 leading-tight rounded-lg outline-none text-start transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900"
          >
            <div className="mr-4 grid place-items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <span className={`${isSidebarOpen ? "block" : "hidden"}`}>Customers</span>
          </Link>
          <div
            role="button"
            tabIndex={0}
            className="flex items-center w-full p-3 leading-tight rounded-lg outline-none text-start transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900"
          >
            <div className="mr-4 grid place-items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <span className={`${isSidebarOpen ? "block" : "hidden"}`}>Profile</span>
          </div>
          <div
            role="button"
            tabIndex={0}
            className="flex items-center w-full p-3 leading-tight rounded-lg outline-none text-start transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900"
          >
            <div className="mr-4 grid place-items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M3 4.875a.375.375 0 01.375-.375h17.25a.375.375 0 01.375.375v14.25a.375.375 0 01-.375.375H3.375a.375.375 0 01-.375-.375V4.875zm1.5.375v13.5h16.5v-13.5H4.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <span className={`${isSidebarOpen ? "block" : "hidden"}`}>RTL</span>
          </div>
        </nav>
      </div>
    </div>
  );
};
export default Sidebar;
