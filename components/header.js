import Link from "next/link";
import React from "react";
import logoImg from "@/assets/logo.png";
const Header = () => {
  return (
    <header className="justify-between flex align-middle items-center p-2 bg-black h-[4rem]">
      <Link href="/" className=" text-white flex flex-row gap-3">
        <img src={logoImg.src} className="h-10" />
        <p className="mt-2 hidden sm:block">NextLevelFood</p>
      </Link>
      <nav>
        <ul className="gap-2 text-white flex flex-row md:gap-4 ">
          <li>
            <Link href="/meals" className="m-2">
              Browse Meals
            </Link>
            <Link href="/community" className="m-2">
              Browse Community
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
