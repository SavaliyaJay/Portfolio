import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="w-full h-20 z-10 fixed bg-white text-black duration-300 ease-in border-8 border-red-500">
        <div className="flex justify-between items-center w-full h-full max-w-screen-xl mx-auto p-4 border-8 border-gray-500">
          <Link href="/#home">
            <h1 className="text-3xl lg:text-4xl font-bold uppercase tracking-wider cursor-pointer border-8 border-blue-500">
              Jay Savaliya
            </h1>
          </Link>
          <div>
            <ul>
                <Link href='/#home' >
                    <li>
                        
                    </li>
                </Link>
            </ul>
          </div>
        
        </div>
      </div>
    </div>
  );
};

export default Navbar;
