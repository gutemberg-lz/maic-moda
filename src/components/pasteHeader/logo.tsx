"use client";

import Link from "next/link";

export const Logo = () => {
  return (
    <Link href={"/"} target="_self">
      <div className="flex ml-5 rounded-lg overflow-hidden">
        <p className="px-4 py-2 font-bold text-lg text-white   bg-[#da5095] dark:text-[#da5095] dark:bg-transparent">
          Maic
        </p>
        <p className="px-4 py-2 font-bold text-lg text-[#da5095] bg-transparent dark:bg-[#da5095] dark:text-white">
          Moda
        </p>
      </div>
    </Link>
  );
};
