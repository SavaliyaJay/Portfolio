import Link from "next/link";
import React, { useEffect, useState } from "react";

import {
  FaBars,
  FaTimes,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

const Navbar = () => {
  const colornav = " bg-[#e9d5ff]";
  const newcolnav = "bg-[#d8b4fe]";
  const [colorfornav, setcolorfornav] = useState(colornav)

  useEffect(() => {
    const sub = window.addEventListener("scroll", () => {
      // setPageScroll();
      if(window.scrollY >= 90){
        setcolorfornav(newcolnav);
      }else{
        setcolorfornav(colornav)
      }
    }
    );

    return sub;
  }, []);
  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "portfolio",
    },
    {
      id: 3,
      link: "experience",
    },
    {
      id: 4,
      link: "me",
    },
    {
      id: 5,
      link: "contact",
    },
  ];
  const [nav, setnav] = useState(false);
  const handleLinkedinClick = () => {
    window.location.href =
      "https://www.linkedin.com/in/jay-savaliya-663730218/";
  };
  const handleGithubClick = () => {
    window.location.href = "https://github.com/SavaliyaJay/";
  };
  const handleInstagramClick = () => {
    window.location.href =
      "https://instagram.com/jay_savaliya_04?igshid=ZGUzMzM3NWJiOQ==";
  };
  const handleFacebookClick = () => {
    window.location.href =
      "https://www.facebook.com/jay.savaliya.739?mibextid=ZbWKwL";
  };
  return (
    <div
      className={`w-full h-20 z-10 fixed duration-300 ease-in text-[#262626] shadow-md backdrop-blur-xl bg-white/30`}
    >
      <div className="flex justify-between items-center w-full h-full max-w-screen-xl mx-auto p-4 ">
        <Link href="/#home">
          <h1 className="text-3xl lg:text-4xl font-bold uppercase tracking-wider cursor-pointer pl-20">
            Js.
          </h1>
        </Link>
        {/* This is my web version */}
        <div>
          <ul className="hidden md:flex">
            {links.map(({ id, link }) => (
              <Link key={id} href={`/#${link}`}>
                <li className="ml-10 text-sm uppercase cursor-pointer duration-200 ease-out hover:scale-105 tracking-wider">
                  {link}
                </li>
              </Link>
            ))}
          </ul>
          {!nav && (
            <div
              className="md:hidden cursor-pointer"
              onClick={() => setnav(true)}
            >
              <FaBars size={25} />
            </div>
          )}
        </div>
      </div>
      <div
        className={
          nav
            ? "md:hidden fixed left-0 top-0 w-full h-full  backdrop-blur"
            : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-4/5 h-fulltext-black shadow-md backdrop-blur-xl bg-[#f3e8ff] p-10 ease-in duration-500 "
              : "fixed top-0 left-[-100%] p-10 h-full ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Link href="/#home">
                <h2
                  onClick={() => setnav(false)}
                  className="text-2xl font-bold uppercase tracking-wider cursor-pointer"
                >
                  JS.
                </h2>
              </Link>
              <div className="p-3 cursor-pointer" onClick={() => setnav(false)}>
                <FaTimes size={25} />
              </div>
            </div>
          </div>
          <div className="mt-20 flex flex-col h-fit gap-20">
            <ul className="uppercase font-medium">
              {links.map(({ id, link }) => (
                <Link key={id} href={`/#${link}`}>
                  <li
                    onClick={() => setnav(false)}
                    className="py-1 text-[17px] tracking-wider cursor-pointer"
                  >
                    {link}
                  </li>
                </Link>
              ))}
            </ul>
            <div>
              <div className="grid grid-cols-2 mx-auto w-4/5 gap-10 ">
                <div
                  className=" flex items-center justify-center rounded-full text-white shadow-md shadow-indigo-950 p-3 cursor-pointer border-4 border-white font-white bg-gradient-to-r from-indigo-800 to-indigo-400"
                  onClick={handleLinkedinClick}
                >
                  <FaLinkedin size={20} />
                </div>
                <div
                  className=" flex items-center justify-center rounded-full text-white shadow-md shadow-indigo-950 p-3 cursor-pointer border-4 border-white font-white bg-gradient-to-r from-indigo-800 to-indigo-400"
                  onClick={handleGithubClick}
                >
                  <FaGithub size={20} />
                </div>
                <div
                  className=" flex items-center justify-center rounded-full text-white shadow-md shadow-indigo-950 p-3 cursor-pointer border-4 border-white font-white bg-gradient-to-r from-indigo-800 to-indigo-400"
                  onClick={handleInstagramClick}
                >
                  <FaInstagram size={20} />
                </div>
                <div
                  className=" flex items-center justify-center rounded-full text-white shadow-md shadow-indigo-950 p-3 cursor-pointer border-4 border-white font-white bg-gradient-to-r from-indigo-800 to-indigo-400"
                  onClick={handleFacebookClick}
                >
                  <FaFacebook size={20} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
