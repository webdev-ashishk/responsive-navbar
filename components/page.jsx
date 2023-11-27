"use client";
import Image from "next/image";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
const NavBar = () => {
  const [showMenu, setMenu] = useState(false);
  function toggleMenu() {
    setMenu(!showMenu);
  }
  return (
    <div className="border-2 flex justify-between">
      <div className="flex  gap-4 text-5xl m-2 font-bold ">
        <snap className="">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png"
            alt="logo"
            height={50}
            width={50}
          />
        </snap>
        <h1 className="sm:hidden lg:block md:block">Tailwinds</h1>
      </div>

      <nav className=" lg:block md:hidden sm:hidden flex justify-center items-center m-2">
        <ul className="flex gap-7  text-3xl font-bold">
          <li>Home1</li>
          <li>about</li>
          <li>contact</li>
          <li>blogs</li>
        </ul>
      </nav>
      <button
        onClick={toggleMenu}
        className="sm:block md:block lg:hidden m-3 text-3xl font-bold"
      >
        {showMenu ? <IoMdClose /> : <AiOutlineMenu />}
      </button>
    </div>
  );
};

export default NavBar;
