import React from "react";

import html from "../public/assets/experience/html.png";
import css from "../public/assets/experience/css.png";
import javascript from "../public/assets/experience/javascript.png";
import reactImage from "../public/assets/experience/react.png";
import nextjs from "../public/assets/experience/nextjs.png";
import tailwind from "../public/assets/experience/8.png";
import graphql from "../public/assets/experience/4.png";
import node from "../public/assets/experience/node.png";
import Image from "next/image";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "HTML",
      src: html,
    },
    {
      id: 2,
      title: "CSS",
      src: css,
    },
    {
      id: 3,
      title: "JavaScript",
      src: javascript,
    },
    {
      id: 4,
      title: "React",
      src: reactImage,
    },
    {
      id: 5,
      title: "Next JS",
      src: nextjs,
    },
    {
      id: 6,
      title: "Tailwind",
      src: tailwind,
    },
    {
      id: 7,
      title: "MongoDB",
      src: graphql,
    },
    {
      id: 8,
      title: "Node JS",
      src: node,
    },
  ];

  return (
    <div id="experience" className="w-full pt-5 ">
      <div className="max-w-screen-xl mx-auto px-8 py-16 text-center md:text-left">
        <h2 className="text-3xl md:text-5xl tracking-wider font-bold text-indigo-950">
          Experience
        </h2>

        <div>
          {/* Features Section */}
          <section id="features">
            {/* Flex container */}
            <div className="container flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row">
              {/* What's Different */}
              <div className="flex flex-col space-y-12 md:w-1/2">
                <h2 className="max-w-md text-4xl font-bold text-center md:text-left">
                  Ready to join me on my tech journey?
                </h2>
                <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
                  Embarking on my tech journey! Follow along as I learn the ins
                  and outs of web development and share my experiences along the
                  way. From coding basics to cutting-edge technologies, join me
                  as I navigate the world of tech!
                </p>
              </div>
              {/* Numbered List */}
              <div className="flex flex-col space-y-8 md:w-1/2">
                {/* List Item */}
                <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
                  {/* Heading */}
                  <div className="rounded-l-full md:bg-transparent">
                    <div className="flex items-center space-x-2">
                      <div className="px-4 py-2 text-white bg-[#5b21b6]  rounded-full md:py-1 bg-brightRed">
                        04
                      </div>
                      <h3 className="text-base font-bold md:mb-4 md:hidden">
                        Jun 2022 - present
                      </h3>
                    </div>
                  </div>
                  <div>
                    <h3 className="hidden mb-4 text-lg font-bold md:block">
                      Jun 2022 - present
                    </h3>
                    <p className="text-darkGrayishBlue">
                      Currently, I am exploring the world of web development with
                      ReactJS, NextJS, and NodeJS
                    </p>
                  </div>
                </div>
                {/* List Item */}
                <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
                  {/* Heading */}
                  <div className="rounded-l-full md:bg-transparent">
                    <div className="flex items-center space-x-2">
                      <div className="px-4 py-2 text-white bg-[#5b21b6]  rounded-full md:py-1 bg-brightRed">
                        03
                      </div>
                      <h3 className="text-base font-bold md:mb-4 md:hidden">
                        CreArt Solutions · Internship
                        <br />
                        Jun 2021 - Jun 2022
                      </h3>
                    </div>
                  </div>
                  <div>
                    <h3 className="hidden mb-4 text-lg font-bold md:block">
                      Jun 2021 - Jun 2022 || CreArt Solutions · Internship
                    </h3>
                    <p className="text-darkGrayishBlue">
                      I want to share with you my learning experience in web
                      development. How they work, and other things like I was
                      able to understand more about html, css, js, jquery,
                      mysql, php
                    </p>
                  </div>
                </div>
                {/* List Item */}
                <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
                  {/* Heading */}
                  <div className="rounded-l-full md:bg-transparent">
                    <div className="flex items-center space-x-2">
                      <div className="px-4 py-2 text-white bg-[#5b21b6]  rounded-full md:py-1 bg-brightRed">
                        02
                      </div>
                      <h3 className="text-base font-bold md:mb-4 md:hidden">
                        Jun 2019 - Jun 2022
                      </h3>
                    </div>
                  </div>
                  <div>
                    <h3 className="hidden mb-4 text-lg font-bold md:block">
                      Jun 2019 - Jun 2022
                    </h3>
                    <p className="text-darkGrayishBlue">
                      This time in college, I am diving into the world of
                      programming with C++, Java, and Android development. Along
                      the way, I am also exploring the powerful WordPress.
                    </p>
                  </div>
                </div>
                {/* List Item */}
                <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
                  {/* Heading */}
                  <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
                    <div className="flex items-center space-x-2">
                      <div className="px-4 py-2 text-white bg-[#5b21b6]  rounded-full md:py-1 bg-brightRed">
                        01
                      </div>
                      <h3 className="text-base font-bold md:mb-4 md:hidden">
                        Before 2019
                      </h3>
                    </div>
                  </div>
                  <div>
                    <h3 className="hidden mb-4 text-lg font-bold md:block">
                      Before 2019
                    </h3>
                    <p className="text-darkGrayishBlue">
                      This time I am learning C, a powerful programming language
                      used for developing operating systems, databases, and
                      more. Join me as I dive into the syntax, data types, and
                      functions of C and discover its endless possibilities!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <h4 className="text-2xl md:text-3xl tracking-wider text-indigo-900  font-bold mt-10">
          My Skills
        </h4>
        <div className="grid lg:grid-cols-4 gap-8">
          {experiences.map(({ id, title, src }) => (
            <div
              key={id}
              className="flex flex-col lg:flex-row gap-10 lg:gap-0 items-center justify-between p-6 shadow-lg rounded-xl hover:scale-105 ease-in duration-300
              odd:shadow-indigo-800 even:shadow-indigo-400"
            >
              <Image src={src} className="max-w-[4rem]" alt={title} />
              <h3 className="font-light">{title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
