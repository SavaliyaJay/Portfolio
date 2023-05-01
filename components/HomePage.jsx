import React from "react";
import imgche from "../public/assets/heroImage2.jpg";
import Image from "next/image";
import Typed from "react-typed";
import Link from "next/link";

const Home = () => {
  return (
    <>
      {/* hero */}
      <section className="hero pt-24 p-4">
        <div className="conatiner flex flex-col-reverse items-center px-6 mx-auto mt-10 space-y-0 md:flex-row md:space-y-0">
          {/* left */}
          <div className="flex flex-col mb-32 space-y-12 md:w-96 pt-10 mx-auto">
            <h1 className="text-4xl font-bold text-center max-w-md md:text-5xl md:text-left">
              Hi There! 👋🏻
              <br /> <span className="text-3xl"> I'M JAY SAVALIYA</span>
            </h1>
            <p className="max-w-md text-center text-darkGrayishBlue md:text-left">
              <div className="animated-typing text-2xl">
                <Typed
                  strings={[
                    "I'm a Frontend Developer",
                    "I Love Software Development",
                  ]}
                  typeSpeed={150}
                  backSpeed={100}
                  loop
                />
              </div>
              <div className="pt-4">
                Currently, I love to work on web application using technologies
                like React, Tailwind, Next JS ,PHP and Mysql.
              </div>
            </p>
            <div class="flex justify-center md:justify-start">
              <Link
                href="/#me"
                class="p-3 px-6 pt-3 text-white bg-blue-800 rounded-full baseline hover:bg-blue-600 md:block"
              >
                Know More
              </Link>
            </div>
          </div>
          <div className=" max-w-sm mx-auto overflow-hidden rounded-xl">
            <Image src={imgche} alt="nathi" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
