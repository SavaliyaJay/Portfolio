import React from "react";
import imgche from "../public/assets/heroImage2.jpg";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";

const Home = () => {
  return (
    <>
      {/* hero */}
      <section id="home" className="hero pt-20 ">
        <div className="conatiner flex flex-col-reverse items-center px-6 mx-auto mt-10 space-y-0 md:flex-row md:space-y-0">
          {/* left */}
          <div className="flex flex-col mb-3 space-y-12 md:w-96 pt-10 mx-auto">
            <h1 className="text-4xl font-bold text-center max-w-md md:text-5xl md:text-left">
              Hi There! 👋🏻
              <br /> <span className="text-3xl"> I AM JAY SAVALIYA</span>
            </h1>
            <div className="max-w-md text-center text-darkGrayishBlue md:text-left">
              <div className="animated-typing text-2xl">
                {/* <Typed
                  strings={[
                   
                   
                  ]}
                  typeSpeed={150}
                  backSpeed={100}
                  loop
                /> */}
                <TypeAnimation
                  sequence={[
                    "I'm a Frontend Developer",
                    3000, // Waits 1s
                    "I Love Software Development",
                    3000, 
                    () => {
                      console.log("Sequence completed"); // Place optional callbacks anywhere in the array
                    },
                  ]}
                  wrapper="span"
                  cursor={true}
                  repeat={Infinity}
                />
              </div>
              <div className="pt-4">
                Currently, I love to work on web application using technologies
                like React, Tailwind, Next JS ,PHP and Mysql.
              </div>
            </div>
            <div className="flex justify-center md:justify-start">
              <Link
                href="/#me"
                className="p-3 px-5 pt-3 text-white bg-[#7c3aed] rounded-md baseline hover:bg-[#5b21b6] tracking-wider font-bold uppercase  md:block"
              >
                Know More
              </Link>
            </div>
          </div>
          <div className=" max-w-xs mx-auto overflow-hidden rounded-xl">
            <Image src={imgche} alt="nathi" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
