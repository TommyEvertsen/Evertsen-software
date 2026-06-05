import { ModeToggle } from "./themeToggle";
import Link from "next/link";
import Image from "next/image";

import MainLogo from "@/public/images/MainLogo.png";
import SmallLogo from "@/public/images/LogoSmall.png";

export function Header() {
  return (
    <div className="headerWrapper">
      <div className="header bg-card flex items-center  border-b h-12">
        <div className="basis-1/2 flex justify-baseline">
          <Image
            src={MainLogo}
            alt="MainLogo"
            className=" object-contain h-32 w-32"
          />
        </div>
        <div className="basis-1/2 flex justify-end items-center px-4 h-full">
          <Link
            href={"/pages/about"}
            className="relative after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-[2px] after:bg-[#245584] after:transition-all after:duration-300 hover:after:w-full"
          >
            About
          </Link>
        </div>
        {/* <ModeToggle /> */}
      </div>
    </div>
  );
}
