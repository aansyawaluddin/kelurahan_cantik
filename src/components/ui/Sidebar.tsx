import { FC, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";

export const menu = [
  { title: "Dashboard", path: "/dashboard", icon: "/icon/dashboard.png" },
  {
    title: "Pemerintahan",
    icon: "/icon/government.png",
    children: [
      { title: "Jumlah RT", path: "/pemerintahan/rt" },
      { title: "Jumlah PNS", path: "/pemerintahan/pns" },
    ],
  },
  {
    title: "Kependudukan",
    icon: "/icon/people.png",
    children: [
      { title: "Distribusi Penduduk", path: "/kependudukan/distribusiPenduduk" },
      { title: "Kelompok Umur", path: "/kependudukan/kelompokUmur" },
    ],
  },
  {
    title: "Pendidikan",
    icon: "/icon/graduation.png",
    children: [
      { title: "RW yang Memiliki Sekolah", path: "/pendidikan/sekolah" },
      { title: "Jumlah Sekolah", path: "/pendidikan/jumlah-sekolah" },
      { title: "Jumalah Guru", path: "/pendidikan/jumlah-guru" },
      { title: "Jumlah Murid", path: "/pendidikan/jumlah-murid" },
    ],
  },
  {
    title: "Kesehatan",
    icon: "/icon/pharmacy.png",
    children: [
      { title: "RW yang Memiliki Puskesmas", path: "/kesehatan/puskesmas" },
      { title: "Jumlah Warga yang Kekurangan Gizi", path: "/kesehatan/gizi" },
    ],
  },
  {
    title: "Perumahan dan Lingkungan",
    icon: "/icon/home.png",
    children: [
      { title: "RW menurut Sumber Air Minum", path: "/perumahan/air" },
      { title: "Jenis Pengguna Listrik", path: "/perumahan/listrik" },
      {
        title: "RW Menurut Sumber Penerangan Jalan Utama",
        path: "/perumahan/jalan",
      },
      { title: "RW Menurut Fasilitas BAB", path: "/perumahan/fasilitas-bab" },
      {
        title: "RW Menurut Jenis Bahan Bakar untuk Memasak",
        path: "/perumahan/bahan-bakar-memasak",
      },
    ],
  },
  {
    title: "Agama dan Sosial",
    icon: "/icon/handshake.png",
    children: [
      { title: "Jumlah Tempat Ibadah", path: "/agama/tempat-ibadah" },
      {
        title: "Jumlah Kejadian Bencana Alam",
        path: "/agama/kejadian-bencana",
      },
      {
        title: "Jumlah Korban Jiwa Akibat Bencana Alam",
        path: "/agama/korban-bencana",
      },
      {
        title: "Keberadaan Fasilitas Mitigasi Bencana Alam",
        path: "/agama/mitigasi-bencana",
      },
      {
        title: "Jumlah RW yang Memiliki Fasilitas Olahraga",
        path: "/agama/olahraga",
      },
    ],
  },
  {
    title: "Pariwisata, Transportasi dan Komunikasi",
    icon: "/icon/worldwide.png",
    children: [
      { title: "Jumlah Sarana Akomodasi", path: "/pariwisata/akomodasi" },
      {
        title: "Prasarana dan Sarana Transportasi antar RW",
        path: "/pariwisata/transportasi",
      },
      {
        title: "Jumlah Kantor Pos dan Sejenisnya",
        path: "/pariwisata/kantor-pos",
      },
      {
        title: "Jumlah Menara Telepon Seluler dan Operator Komunikasi",
        path: "/pariwisata/komunikasi",
      },
      {
        title: "Kekuatan Sinyal dan Jenis Sinyal Internet",
        path: "/pariwisata/internet",
      },
      {
        title: "Jumlah RW menurut Lapangan Pekerjaan",
        path: "/pariwisata/pekerjaan",
      },
    ],
  },
  {
    title: "Ekonomi",
    icon: "/icon/wallet.png",
    children: [
      { title: "Jumlah Bank", path: "/ekonomi/bank" },
      { title: "Jumlah Koperasi", path: "/ekonomi/koperasi" },
      { title: "Jumlah Sarana Perdagangan", path: "/ekonomi/perdagangan" },
    ],
  },
];

const Sidebar: FC = () => {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [currentPath, setCurrentPath] = useState<string>("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const path = window.location.pathname;
      setCurrentPath(path);
      const activeParent = menu.find((item) =>
        item.children?.some((child) => child.path === path)
      );
      if (activeParent) {
        setOpenMenu(activeParent.title);
      }
    }
  }, []);

  const toggleMenu = (title: string) => {
    setOpenMenu((prev) => (prev === title ? null : title));
  };


  return (
    <aside className="h-screen w-64 p-6 bg-white font-space-grotesk overflow-y-hidden fixed">
      <div className="mb-8 flex items-center">
        <Image
          src="/images/logo.png"
          alt="Logo"
          width={50}
          height={50}
          className="object-contain ml-2 mr-2"
        />
        <span className="font-bold text-[14px] text-[#8E191C]">
          Sistem Informasi Kelurahan Cantik
        </span>
      </div>
      <nav>
        <ul>
          {menu.map((item) => (
            <li key={item.title} className="mb-3">
              {item.children ? (
  <>
    <div
      onClick={() => toggleMenu(item.title)}
      className="flex items-start justify-between px-2 py-2 hover:bg-gray-100 rounded text-left cursor-pointer"
    >
      <div className="flex items-start gap-2 flex-grow">
        <Image
          src={item.icon}
          alt={`${item.title} icon`}
          width={20}
          height={20}
          className="icon-recolor mt-1 shrink-0"
        />
        <span
          className={`text-[16px] select-none whitespace-normal break-words ${
            openMenu === item.title
              ? "text-[#1CA6A9] font-semibold"
              : "text-[#1CA6A9]"
          }`}
        >
          {item.title}
        </span>
      </div>
      <div className="mt-1 p-1">
        {openMenu === item.title ? (
          <ChevronUpIcon className="w-4 h-4 text-[#1CA6A9]" />
        ) : (
          <ChevronDownIcon className="w-4 h-4 text-[#1CA6A9]" />
        )}
      </div>
    </div>
    {openMenu === item.title && (
      <ul className="mt-1 ml-6 pl-4 border-l-2 border-[#CFF2F2] bg-white">
        {item.children.map((sub) => (
          <li key={sub.path} className="pl-2 py-1">
            <Link
              href={sub.path}
              className={`text-[#1CA6A9] hover:opacity-80 transition-opacity duration-200 ${
                currentPath === sub.path ? "font-semibold" : ""
              }`}
            >
              {sub.title}
            </Link>
          </li>
        ))}
      </ul>
    )}
  </>
              ) : (
                <div className="flex items-center px-2 py-1">
                  <Image
                    src={item.icon}
                    alt={`${item.title} icon`}
                    width={20}
                    height={20}
                    className="mr-2 icon-recolor"
                  />
                  <Link
                    href={item.path}
                    className={`text-[#1CA6A9] hover:opacity-80 transition-opacity duration-200 ${
                      currentPath === item.path ? "font-semibold" : ""
                    }`}
                  >
                    {item.title}
                  </Link>
                </div>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
