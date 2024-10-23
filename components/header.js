import Link from "next/link";
import React from "react";
import logoImg from "@/assets/logo.png";
const Header = () => {
  return (
    <header>
      <Link href="/">
        <img src={logoImg.src} />
        NextLevelFood
      </Link>
      <nav>
        <ul>
          <li>
            {" "}
            <Link href="/meals">Browse Meals</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
