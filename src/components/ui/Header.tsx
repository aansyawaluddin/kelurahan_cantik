"use client";

import { FC, useState, useMemo } from "react";
import { usePathname } from "next/navigation";
import { MagnifyingGlassIcon, BellIcon } from "@heroicons/react/24/outline";
import { menu } from "./Sidebar";

const Header: FC = () => {
  const [search, setSearch] = useState("");
  const pathname = usePathname();

  const pageTitle = useMemo(() => {
    const main = menu.find((m) => m.path === pathname);
    if (main) return main.title;
    for (const m of menu) {
      if (m.children) {
        const sub = m.children.find((c) => c.path === pathname);
        if (sub) return sub.title;
      }
    }
    return "Dashboard";
  }, [pathname]);

  return (
    <header className="bg-white flex justify-between mb-0 p-6 items-center">
      <h1 className="text-[20px] font-semibold text-black">
        Kelurahan Cantik – {pageTitle}
      </h1>
      <div className="flex items-center space-x-3">
        <div className="relative">
          <input
            type="text"
            placeholder="Search Anything..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="px-10 py-1 rounded border bg-gray-100 placeholder-[#808080] focus:outline-none"
          />
          <MagnifyingGlassIcon className="w-5 h-5 text-gray-500 absolute left-3 top-1/2 -translate-y-1/2" />
        </div>

        <button className="p-2 rounded-full hover:bg-gray-100 transition">
          <BellIcon className="w-6 h-6 text-gray-600" />
        </button>

        <img
          src="/images/profile.png"
          alt="User Avatar"
          className="w-8 h-8 rounded-full"
        />
      </div>
    </header>
  );
};

export default Header;
