import React from "react";
import { MdExpandMore } from "react-icons/md";

import Link from "next/link";
import Image from "next/image";
import img6_1 from "../public/assets/portfolio/StuRepo/1.png";
import img7_1 from "../public/assets/portfolio/meet/1.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 6,
      title: "Student Reporting System",
      imageSrc: img6_1,
      url: "StuRepo",
      tech: "react js, redux, node js, postgres, sequelize",
    },
    {
      id: 7,
      title: "E-meeting",
      imageSrc: img7_1,
      url: "meet",
      tech: "Html, CSS, Javascript, Node JS, Express JS, WebRTC, Socket.io",
    }
  ];
  return (
    <div id="portfolio" className="w-full pt-20 ">
      <div className="max-w-screen-xl mx-auto px-8 text-center md:text-left">
        <h3 className="text-3xl md:text-5xl tracking-wider text-indigo-950  font-bold">
          Portfolio
        </h3>
        <h4 className="text-2xl md:text-3xl tracking-wider text-indigo-900  font-bold">
          Latest Projects
        </h4>
        <p className="py-4 max-w-lg">
          While only that hauntedtell many purple no lent cushions more heart.
          Soul cushions the still if i, hath lamplight mortals the rapping have
          me and.
        </p>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {portfolios.map(({ id, title, imageSrc, url, tech }) => (
            <Link key={id} href={`/portfolio/${url}`}>
              <div className="cursor-pointer overflow-hidden rounded-md bg-white px-2 pt-2">
                <Image
                  src={imageSrc}
                  alt={title}
                  className="rounded-md duration-200 
                  hover:scale-110"
                />
                <div className="flex justify-between items-center mx-4">
                  <div className="my-4">
                    <h2 className="text-center text-base  capitalize font-bold text-indigo-950">{title}</h2>
                    <h3 className="text-center text-base capitalize font-bold text-indigo-950">tech: {tech}</h3>
                  </div>
                  <div className="group flex items-center justify-center my-2 text-[#6d28d9] hover:border-b-4 hover:border-indigo-500 px-6 py-2 font-bold cursor-pointer">
                    Read More
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="flex items-center justify-center">
          <Link href="/portfolio">
            <div className="group flex items-center justify-center my-8 text-white bg-[#7c3aed] rounded-md hover:bg-[#5b21b6]  px-5 py-3 font-bold uppercase tracking-wider cursor-pointer">
              all projects
              <span className="-rotate-90 duration-100 ease-in group-hover:translate-x-5">
                <MdExpandMore size={25} />
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
