import Link from "next/link";
import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaInstagram
} from "react-icons/fa";

const Navbar = () => {
  
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
    window.location.href = "https://www.linkedin.com/in/jay-savaliya-663730218/";
  };
  const handleGithubClick = () => {
    window.location.href = "https://github.com/SavaliyaJay/";
  };
  const handleInstagramClick = () => {
    window.location.href = "https://instagram.com/https://www.instagram.com/invites/contact/?i=3rk3vji3np97&utm_content=5h6ftzx";
  };
  const handleFacebookClick = () => {
    window.location.href = "https://www.facebook.com/jay.savaliya.739?mibextid=ZbWKwL";
  };
  return (
    <div className="w-full h-20 z-10 fixed bg-white text-black duration-300 ease-in ">
      <div className="flex justify-between items-center w-full h-full max-w-screen-xl mx-auto p-4 ">
        <Link href="/#home">
          <h1 className="text-3xl lg:text-4xl font-bold uppercase tracking-wider cursor-pointer">
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
            ? "md:hidden fixed left-0 top-0 w-full h-full bg-black/70 backdrop-blur"
            : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-4/5 h-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-10 ease-in duration-500"
              : "fixed top-0 left-[-100%] p-10 h-full ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Link href="/#home">
                <h2 className="text-2xl font-bold uppercase tracking-wider cursor-pointer">
                  JS.
                </h2>
              </Link>
              <div className="p-3 cursor-pointer" onClick={() => setnav(false)}>
                <FaTimes size={25} />
              </div>
            </div>
          </div>
          <div className="mt-24 flex flex-col h-fit gap-20">
            <ul className="uppercase font-medium">
            {links.map(({ id, link }) => (
              <Link key={id} href={`/#${link}`}>
                <li className="py-1 text-[17px] tracking-wider cursor-pointer">
                  {link}
                </li>
              </Link>
            ))}
            </ul>
            <div>
              <div className="grid grid-cols-2 mx-auto w-4/5 gap-10">
                <div className=" flex items-center justify-center rounded-full shadow-md shadow-white p-3 cursor-pointer bg-gradient-to-r from-cyan-600 to-blue-600" onClick={handleLinkedinClick}>
                  <FaLinkedin size={20} />
                </div>
                <div className=" flex items-center justify-center rounded-full shadow-md shadow-white p-3 cursor-pointer bg-gradient-to-r from-cyan-600 to-blue-600"  onClick={handleGithubClick}>
                  <FaGithub size={20}/>
                </div>
                <div className=" flex items-center justify-center rounded-full shadow-md shadow-white p-3 cursor-pointer bg-gradient-to-r from-cyan-600 to-blue-600" onClick={handleInstagramClick}>
                  <FaInstagram size={20}/>
                </div>
                <div className=" flex items-center justify-center rounded-full shadow-md shadow-white p-3 cursor-pointer bg-gradient-to-r from-cyan-600 to-blue-600" onClick={handleFacebookClick}>
                  <FaFacebook size={20}/>
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
