import Link from "next/link";
import React from "react";

import { MdExpandMore } from "react-icons/md";
// import resume from "../assets/resume.pdf"
import javascript from "../public/assets/resume.pdf";

const Me = () => {
  return (
    <div id="me" className="w-full pt-5">
      <div className="max-w-screen-xl mx-auto px-8 py-16 text-center md:text-left">
        <h2 className="text-3xl md:text-5xl tracking-wider  text-indigo-950 font-bold">
          About Me
        </h2>

        <div className="my-8 px-8">
          <p className="py-4 max-w-8xl mx-auto">
            As a driven and skilled computer engineering student, I possess a
            diverse set of programming skills including C, C++, Java, HTML, CSS,
            JavaScript, and more. With a passion for web development and a focus
            on collaboration and problem-solving, I am dedicated to making a
            positive impact in the technology industry.
          </p>
          <p className="py-4 max-w-8xl mx-auto">
            A highly motivated and enthusiastic student currently studying
            computer engineering at Charusat University, I possess a wide range
            of programming skills including React JS, PHP, tailwind CSS and
            more. With a keen eye for detail and strong communication skills, I
            am committed to creating innovative solutions and driving success in
            the technology industry.
          </p>
        </div>

        <div className="flex items-center justify-center gap-10">
          <Link href="/_next/static/files/resume.pdf" download>
            <div className="group flex items-center justify-center my-8 bg-blue-800 hover:bg-blue-600 text-white px-6 py-3 font-bold uppercase rounded-full tracking-wider cursor-pointer">
              resume
              <span className="-rotate-90 duration-100 ease-in group-hover:rotate-0">
                <MdExpandMore size={25} />
              </span>
            </div>
          </Link>

          <Link href="/#portfolio">
            <div className="group flex items-center justify-center my-8 bg-blue-800 hover:bg-blue-600 text-white px-6 py-3 font-bold uppercase rounded-full tracking-wider cursor-pointer">
              my portfolio
              <span className="-rotate-90 duration-100 ease-in group-hover:-rotate-180">
                <MdExpandMore size={25} />
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Me;
