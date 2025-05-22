import { FC, useState } from "react";
import { MagnifyingGlassIcon, BellIcon } from "@heroicons/react/24/outline";


const Header: FC = () => {
  const [search, setSearch] = useState("");
  return (
    <header className="bg-white flex justify-between items-center">
      <h1 className="text-[20px] font-semibold text-black">
        Kelurahan Cantik - Dashboard
      </h1>
      <div className="flex items-center space-x-2">
        <div className="relative">
          <input
            type="text"
            placeholder="Search Anything..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="
              px-10 py-1 rounded border bg-gray-100 
              placeholder-[#808080] focus:outline-none
            "
          />
          {/* ikon search di dalam input */}
          <MagnifyingGlassIcon className="w-5 h-5 text-gray-500 absolute left-3 top-1/2 transform -translate-y-1/2" />
        </div>
        {/* tombol notifikasi */}
        <button className="p-2 rounded-full hover:bg-gray-100">
          <BellIcon className="w-[24px] h-[24px] text-gray-600" />
        </button>
        <img
          src="images/profile.png"
          alt="User Avatar"
          className="w-[24px] h-[24px]"
        />
      </div>
    </header>
  );
};

export default Header;
