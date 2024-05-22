import React from "react";
import { FaGithub } from "react-icons/fa";
import { AiOutlineCaretRight } from "react-icons/ai";
import { BiChevronLeft } from "react-icons/bi";
import Link from "next/link";
import Image from "next/image";

// only all image part 
import img1_1 from "../../public/assets/portfolio/Starbuck/1.png";
import img1_2 from "../../public/assets/portfolio/Starbuck/2.png";
import img1_3 from "../../public/assets/portfolio/Starbuck/3.png";

import img2_1 from "../../public/assets/portfolio/React News App Function/1.png";
import img2_2 from "../../public/assets/portfolio/React News App Function/2.png";
import img2_3 from "../../public/assets/portfolio/React News App Function/3.png";

import img3_1 from "../../public/assets/portfolio/PHP project/1.png";

import img4_1 from "../../public/assets/portfolio/React Project/1.png";

import img5_1 from "../../public/assets/portfolio/Tailwind project/1.png";
import img5_2 from "../../public/assets/portfolio/Tailwind project/2.png";

import img6_1 from "../../public/assets/portfolio/StuRepo/1.png";

import img7_1 from "../../public/assets/portfolio/meet/1.png";

const portfolios = [
  {
    id: 1,
    title: "Starbuks",
    imageSrc: [img1_1, img1_2, img1_3],
    url: "Starbuks",
    tech: "Html,CSS,Javascript",
    desc: ["This is my simple javascript project in which I will click on any glass on the screen, the web-page will change its color image."],
    projecturl: "https://github.com/SavaliyaJay"
  },
  {
    id: 2,
    title: "News App",
    imageSrc: [img2_1, img2_2, img2_3],
    url: "NewsApp",
    tech: "React JS,Boostrap",
    desc: ["Using React js I will create a news web in which I use react-infinite-scroll-component and react-top-loading-bar."],
    projecturl: "https://github.com/SavaliyaJay/News-App-Using-Function-Base-Component"
  },
  {
    id: 3,
    title: "PHP Project Book-Store",
    imageSrc: [img3_1],
    url: "phpProject",
    tech: "Html, CSS, bootstrap, Javascript, PHP, SQL",
    desc: ["This system is used for online advertising the books for sale and purchase. The user can upload the pictures of book along with the price and little description. The enquiry system has been added to this system. The chat messaging part like an email facility has been encoded with the site. This system provides the administrator with full-fledged facility of removing abusive books or malicious users. It provides the administrator to add books, remove and contact. It takes care of authentication of the user who have registered to the site. Administrator, user and guest user."],
    projecturl: "https://github.com/SavaliyaJay/book-store"
  },
  {
    id: 4,
    title: "E-learning",
    imageSrc: [img4_1],
    url: "eLearning",
    tech: "React Js, Tailwind CSS, Node JS, Express JS, Mongoose",
    desc: ["This is my React JS Web App. This is an E-learning Platform using which tutor can sell their course, Students can learn from that course."],
    projecturl: "https://github.com/SavaliyaJay/Elearning_FrontEnd"
  },
  {
    id: 5,
    title: "Tailwind CSS Project",
    imageSrc: [img5_1, img5_2],
    url: "tailCss",
    tech: "HTML, Tailwind CSS",
    desc: ["This is my fully responsive Tailwind CSS project in which I create a responsive navbar, and all other things."],
    projecturl: "https://github.com/SavaliyaJay/Only_tailwind"
  },
  {
    id: 6,
    title: "Student Reporting System",
    imageSrc: [img6_1],
    url: "StuRepo",
    tech: "react js, redux, node js, postgres, sequelize",
    desc: [
      "Role: Sole Developer (Front-end)",
      "Module: Admin, Faculty, Student",
      "Achievements: Implemented digital submission and evaluation system for reports.",
      "Reduced paper usage by over 90%, enhancing environmental sustainability.",
      "Developed front-end for a university-wide platform with 1,000+ student users."
    ],
    projecturl: "https://student-report-bay.vercel.app/"
  },
  {
    id: 7,
    title: "E-meeting",
    imageSrc: [img7_1],
    url: "meet",
    tech: "Html, CSS, Javascript, Node JS, Express JS, WebRTC, Socket.io",
    desc: [
      "This is my E-meeting project in which I create a video call and chatbox using WebRTC and Socket.io.",
      "Features :  1. Video Calls",
      "2. Chatbox ",
      "3. Collaborative Whiteboard",
      "4. Screensharing "
    ],
    projecturl: "https://meet-3056.onrender.com/"
  },
];


export async function getStaticPaths() {
  const paths = portfolios.map((p) => ({
    params: { id: p.url },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const portfolio = getPortfolioFrom(params.id);

  return {
    props: { portfolio },
  };
}

const getPortfolioFrom = (url) => portfolios.filter((p) => p.url === url)[0];

// const OnePortfolio = ({ portfolio: { title, imageSrc, desc, projecturl, tech } }) => {
//   return (
//     <div className="h-fit w-full text-center bg-[#f3e8ff]">
//       <div className="max-w-screen-xl mx-auto w-full h-full pt-24 p-8 flex flex-col">
//         <div className="flex">
//           <Link href="/portfolio">
//             <div className="flex items-center justify-center my-8 text-indigo-900 font-bold capitalize cursor-pointer">
//               <BiChevronLeft size={25} /> back
//             </div>
//           </Link>
//         </div>

//         <h1 className="capitalize text-4xl mt-2 mb-8 text-center md:text-left font-bold text-indigo-600 tracking-wider">
//           {title}
//         </h1>

//         <div className="max-w-6xl mx-auto grid gap-8 ">
//           {imageSrc.map((img, index) => (
//             <Image key={index} src={img} alt="bla" className="w-full h-full object-cover cursor-pointer rounded-md bg-white p-3 " />
//           ))}
//         </div>
//         <hr className="border-4 border-white mx-10 mt-10" />

//         <h3 className="text-center text-3xl my-4 capitalize font-bold  text-indigo-950">technologies: {tech}</h3>
//         <hr className="border-2 border-white mx-20" />
//         <h2 className="text-center text-2xl my-4 capitalize font-bold  text-indigo-950">
//           Description
//         </h2>
//         <p>
//           {desc}
//         </p>



//         <div className="flex items-center justify-center gap-10">
//           <Link href={projecturl}>
//             <div className="group flex items-center justify-center my-8 text-white bg-[#7c3aed]  hover:bg-[#5b21b6]  px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer">
//               demo
//               <span className="duration-200 ease-in">
//                 <FaGithub size={18} className="ml-2" />
//               </span>
//             </div>
//           </Link>

//           <Link href="/">
//             <div className="group flex items-center justify-center my-8 text-white bg-[#7c3aed]  hover:bg-[#5b21b6] px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer">
//               my portfolio
//               <span className="duration-200 ease-in">
//                 <AiOutlineCaretRight size={18} className="ml-2" />
//               </span>
//             </div>
//           </Link>
//         </div>


//         <hr className="border-4 border-white mx-10 b-10" />
//       </div>

//     </div>
//   );
// };

// export default OnePortfolio;

const OnePortfolio = ({ portfolio: { title, imageSrc, desc, projecturl, tech } }) => {
  return (
    <div className="h-fit w-full text-center bg-[#f3e8ff]">
      <div className="max-w-screen-xl mx-auto w-full h-full pt-24 p-8 flex flex-col">
        <div className="flex">
          <Link href="/portfolio">
            <div className="flex items-center justify-center my-8 text-indigo-900 font-bold capitalize cursor-pointer">
              <BiChevronLeft size={25} /> back
            </div>
          </Link>
        </div>

        <h1 className="capitalize text-4xl mt-2 mb-8 text-center md:text-left font-bold text-indigo-600 tracking-wider">
          {title}
        </h1>

        <div className="max-w-6xl mx-auto grid gap-8 ">
          {imageSrc.map((img, index) => (
            <Image key={index} src={img} alt={`Portfolio image ${index + 1}`} className="w-full h-full object-cover cursor-pointer rounded-md bg-white p-3 " />
          ))}
        </div>
        <hr className="border-4 border-white mx-10 mt-10" />

        <h3 className="text-center md:text-3xl text-xl my-4 capitalize font-bold  text-indigo-950">technologies: {tech}</h3>
        <hr className="border-2 border-white mx-20" />
        <h2 className="text-center text-2xl my-4 capitalize font-bold  text-indigo-950">
          Description
        </h2>
        <div className="text-left w-full md:mx-[3rem]"> 
          {desc.map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>

        <div className="flex items-center justify-center gap-10">
          <Link href={projecturl}>
            <div className="group flex items-center justify-center my-8 text-white bg-[#7c3aed] hover:bg-[#5b21b6] px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer">
              demo
              <span className="duration-200 ease-in">
                <FaGithub size={18} className="ml-2" />
              </span>
            </div>
          </Link>

          <Link href="/">
            <div className="group flex items-center justify-center my-8 text-white bg-[#7c3aed] hover:bg-[#5b21b6] px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer">
              my portfolio
              <span className="duration-200 ease-in">
                <AiOutlineCaretRight size={18} className="ml-2" />
              </span>
            </div>
          </Link>
        </div>

        <hr className="border-4 border-white mx-10 b-10" />
      </div>
    </div>
  );
};

export default OnePortfolio;

