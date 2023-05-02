import React from "react";
import { MdExpandMore } from "react-icons/md";

import img1 from "../public/assets/portfolio/Starbuck/1.png";
import img2 from "../public/assets/portfolio/React News App Function/1.png";
import Link from "next/link";
import Image from "next/image";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      title: "Starbuks",
      imageSrc: img1,
      url: "Starbuks",
      tech: "Html,CSS,Javascript",
    },
    {
      id: 2,
      title: "News App",
      imageSrc: img2,
      url: "NewsApp",
      tech: "React JS,Boostrap",
    },
    
  ];
  return (
    <div id="portfolio" className="w-full pt-20 ">
      <div className="max-w-screen-xl mx-auto px-8 text-center md:text-left">
        <h2 className="text-5xl md:text-7xl tracking-wider uppercase text-blue-800  font-bold">
          portfolio
        </h2>
        <p className="py-4 max-w-lg">
          While only that hauntedtell many purple no lent cushions more heart.
          Soul cushions the still if i, hath lamplight mortals the rapping have
          me and.
        </p>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {portfolios.map(({ id, title, imageSrc, url, tech }) => (
            <Link key={id} href={`/portfolio/${url}`}>
              <div className="cursor-pointer group shadow-md shadow-gray-600 overflow-hidden rounded-md">
                <Image
                  src={imageSrc}
                  alt={title}
                  className="rounded-md duration-200 
                  hover:scale-110"
                />
                <div className="text-center text-base capitalize my-4 font-light">
                  <h2>{title}</h2>
                  <h3>technologies: {tech}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="flex items-center justify-center">
          <Link href="/portfolio">
            <div className="group flex items-center justify-center my-8 bg-blue-800 hover:bg-blue-600 text-white px-6 py-3 font-bold uppercase rounded-full tracking-wider cursor-pointer">
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