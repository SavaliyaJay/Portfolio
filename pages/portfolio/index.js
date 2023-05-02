import React from "react";
import installNode from "../../public/assets/portfolio/installNode.jpg";
import reactParallax from "../../public/assets/portfolio/reactParallax.jpg";
import usestate from "../../public/assets/portfolio/usestate.jpg";
import reactWeather from "../../public/assets/portfolio/reactWeather.jpg";
import img1 from "../../public/assets/portfolio/Starbuck/1.png";
import img2 from "../../public/assets/portfolio/React News App Function/1.png";
import { MdExpandMore } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";

export const getStaticProps = async () => {
  const portfolios = [
    {
      id: 1,
      title: "Star Bucks",
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

  return {
    props: { portfolios },
  };
};

const PortfoliosRoute = ({ portfolios }) => {
  return (
    <div id="portfolio" className="w-full">
      <div className="max-w-screen-xl mx-auto pt-24 p-4 text-center md:text-left">
        <h2 className="text-5xl md:text-7xl tracking-wider uppercase text-blue-500 font-bold pb-16">
          portfolio
        </h2>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {portfolios.map(({ id, title, imageSrc, url }) => (
            <Link key={id} href={`/portfolio/${url}`}>
              <div className="cursor-pointer group shadow-md shadow-gray-600 overflow-hidden rounded-md">
                <Image
                  src={imageSrc}
                  alt={title}
                  className="rounded-md duration-200 
              hover:scale-110"
                />
                <h2 className="text-center text-base capitalize my-4 font-light duration-200 group-hover:underline underline-offset-4">
                  {title}
                </h2>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfoliosRoute;
