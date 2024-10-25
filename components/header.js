import Link from "next/link";
import React from "react";
import Image from "next/image";
import logoImg from "@/assets/logo.png";
const Header = () => {
  return (
    <header className="justify-between flex align-middle items-center p-2 shadow-lg h-[4rem] font-playfair">
      <Link href="/" className=" text-black flex flex-row gap-3">
        <Image
          src={logoImg}
          alt="A Plate with food on it"
          className="h-10 w-20"
          priority
        />
        <p className="mt-2 hidden sm:block">NextLevelFood</p>
      </Link>
      <nav>
        <ul className="gap-2 text-black flex flex-row md:gap-4 ">
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
