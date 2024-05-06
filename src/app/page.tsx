"use client";

import { useAuthModalContext } from "@/context/AuthModalContext";
import { createContext } from "react";

const Context = createContext("");

export default function Home() {
  const { handleOpen } = useAuthModalContext();
  return (
    <div className="flex h-screen flex-col justify-between text-center">
      <div className="me-auto ms-auto w-6/12">
        <div className="">
          <div className="mb-12 mt-32 bg-gradient-to-br from-white to-gray-600 bg-clip-text text-7xl text-transparent">
            Test Projest based on Linear app
          </div>
          <div className="mb-12 me-auto ms-auto w-10/12  text-xl text-gray-300">
            Meet the new standard for modern software development. Streamline
            issues, sprints, and product roadmaps.
          </div>
        </div>
        <button
          onClick={handleOpen}
          className="h-12 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
        >
          Get Started {">"}
        </button>
      </div>
      <div className="">Illia Smolihovets 2024</div>
    </div>
  );
}

/// так как в пейдже обозначен контент который доступен незалогиненым пользователям, стоит ли его вынести в виде
// отдельной компоненты а потом передать его в authlayout?
