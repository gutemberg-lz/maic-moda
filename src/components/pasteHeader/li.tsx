"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  link: string;
  children: string;
};

export const Li = ({ children, link }: Props) => {
  const pathname = usePathname();

  return (
    <Link href={link} target="_self">
      <li
        className={`flex-1 font-bold text-center transition-all ease-in-out cursor-pointer hover:text-[#da5095] 
      ${pathname === link ? "text-lg text-[#da5095]" : "text-md text-muted-foreground/50"}`}
      >
        {children}
      </li>
    </Link>
  );
};
