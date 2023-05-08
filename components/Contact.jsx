import Image from "next/image";
import React from "react";

import contactus from "../public/assets/contact-us.jpg";
import { FaFacebook, FaGithub, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Contact = () => {
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
    <div id="contact" className="w-full">
      <div className="max-w-screen-xl mx-auto px-8 py-16 text-center md:text-left">
        <h2 className="text-3xl md:text-5xl tracking-wider text-indigo-950  font-bold">
          Contact Me
        </h2>

        <div className="flex flex-col md:flex-row gap-8 shadow-xl shadow-indigo-700 bg-white mt-4  rounded-xl">
          <div className="w-full md:w-1/2 h-full rounded-xl p-4">
            <Image
              src={contactus}
              alt="man with laptop"
              className="rounded-xl"
            />
            <p className="pt-2 pb-8">
              I am open to talk regarding freelancing or full-time
              opportunities. Fell free to contact me using your preferred
              medium.
            </p>

              <div className="grid grid-cols-2 mx-auto w-4/5 gap-10">
                <div
                  className="flex items-center justify-center rounded-full shadow-md shadow-indigo-950 hover:scale-105 duration-200 p-3 cursor-pointer"
                  onClick={handleLinkedinClick}
                >
                  <FaLinkedin size={20} />
                </div>
                <div
                  className="flex items-center justify-center rounded-full shadow-md shadow-indigo-950 hover:scale-105 duration-200 p-3 cursor-pointer"
                  onClick={handleGithubClick}
                >
                  <FaGithub size={20} />
                </div>
                <div
                  className="flex items-center justify-center rounded-full shadow-md shadow-indigo-950 hover:scale-105 duration-200 p-3 cursor-pointer"
                  onClick={handleInstagramClick}
                >
                  <FaInstagram size={20} />
                </div>
                <div
                  className="flex items-center justify-center rounded-full shadow-md shadow-indigo-950 hover:scale-105 duration-200 p-3 cursor-pointer"
                  onClick={handleFacebookClick}
                >
                  <FaFacebook size={20} />
                </div>
              </div>
          </div>

          {/* form stuff  */}
          <div className="w-full md:w-1/2 h-full rounded-xl p-4">
            <div className="p-4 text-left">
              <form
                action="https://getform.io/f/39abb0ce-6a55-4a78-9c60-5f1d373dcab7"
                method="POST"
              >
                <div className="w-full py-2">
                  <div className="flex flex-col">
                    <label className="capitalize text-sm py-2 text-slate-600 font-light">
                      name
                    </label>
                    <input
                      type="text"
                      name="name"
                      className="border-2 rounded-lg p-3 flex focus:outline-none border-blue-200"
                      required
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="capitalize text-sm py-2 text-slate-600 font-light">
                      phone
                    </label>
                    <input
                      type="text"
                      name="phone"
                      className="border-2 rounded-lg p-3 flex focus:outline-none border-blue-200"
                      required
                    />
                  </div>

                  <div className="flex flex-col col-span-2">
                    <label className="capitalize text-sm py-2 text-slate-600 font-light">
                      email
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="border-2 rounded-lg p-3 flex focus:outline-none border-blue-200"
                      required
                    />
                  </div>
                  <div className="flex flex-col col-span-2">
                    <label className="capitalize text-sm py-2 text-slate-600 font-light">
                      message
                    </label>
                    <textarea
                      name="message"
                      rows="10"
                      className="border-2 rounded-lg p-3 flex focus:outline-none border-blue-200"
                      required
                    ></textarea>
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <button className="my-8  text-white bg-[#7c3aed] rounded-md  hover:bg-[#5b21b6] px-6 py-3 font-bold uppercase tracking-wider cursor-pointer hover:scale-105 duration-200">
                    send message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
