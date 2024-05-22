import React from "react";
import img1 from "../../public/assets/portfolio/Starbuck/1.png";
import img2 from "../../public/assets/portfolio/React News App Function/1.png";
import img3 from "../../public/assets/portfolio/PHP project/2.png";
import img4 from "../../public/assets/portfolio/React Project/2.png";
import img5 from "../../public/assets/portfolio/Tailwind project/3.png";
import img6_1 from "../../public/assets/portfolio/StuRepo/1.png";
import img7_1 from "../../public/assets/portfolio/meet/1.png";

import Link from "next/link";
import Image from "next/image";

export const getStaticProps = async () => {
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
    ,{
      id: 1,
      title: "Star Bucks",
      imageSrc: img1,
      url: "Starbuks",
      tech: "Html, CSS, Javascript",
    },
    {
      id: 2,
      title: "News App",
      imageSrc: img2,
      url: "NewsApp",
      tech: "React JS, Boostrap",
    }, {
      id: 3,
      title: "PHP Project Book-Store",
      imageSrc: img3,
      url: "phpProject",
      tech: "Html, CSS, bootstrap, Javascript, PHP, SQL",
    }, {
      id: 4,
      title: "E-learning",
      imageSrc: img4,
      url: "eLearning",
      tech: "React Js, Tailwind CSS, Node JS, Express JS, Mongoosee",
    }, {
      id: 5,
      title: "Tailwind CSS Project",
      imageSrc: img5,
      url: "tailCss",
      tech: "HTML, Tailwind CSS",
    }

  ];

  return {
    props: { portfolios },
  };
};

const PortfoliosRoute = ({ portfolios }) => {
  return (
    <div id="portfolio" className="w-full bg-[#f3e8ff]">
      <div className="max-w-screen-xl mx-auto pt-24 p-4 text-center md:text-left">
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-3xl md:text-5xl tracking-wider text-indigo-950 font-bold pb-5">
            Portfolio
          </h2>
          <h3 className="text-xl md:text-3xl tracking-wider text-indigo-950 font-bold pb-10">
            My All Projects
          </h3>
        </div>

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
                    <h3 className="text-center text-base capitalize font-bold text-indigo-950">technologies: {tech}</h3>
                  </div>
                  <div className="group flex items-center justify-center my-2 text-[#6d28d9] hover:border-b-4 hover:border-indigo-500 px-6 py-2 font-bold cursor-pointer">
                    Read More
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfoliosRoute;
