import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import { MdNightsStay, MdWbSunny } from "react-icons/md";

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isMenuShown, setIsMenuShown] = useState(false);
  const links = [
    {
      id: 1,
      link: "inicio",
    },
    {
      id: 2,
      link: "seccion 1",
    },
    {
      id: 3,
      link: "seccion 2",
    },
    {
      id: 4,
      link: "contacto",
    },
  ];

  return (
    <>
      <div className="fixed w-full h-32 bg-gray-900 text-white z-20  ">
        <div className="flex justify-between  md:gap-5 items-center max-w-screen-xl mx-auto px-8 h-full">
          <div className="hidden lg:flex items-center">
            <ul className="flex ">
              {links.map(({ id, link }) => (
                <Link key={id} to={link} smooth duration={500}>
                  <li className="p-4 uppercase duration-300 hover:text-[#ffd7d7] hover:scale-110 cursor-pointer">
                    {link}
                  </li>
                </Link>
              ))}
            </ul>
          </div>

          <div
            onClick={() => setIsMenuShown(!isMenuShown)}
            className="block lg:hidden cursor-pointer"
          >
            {isMenuShown ? <FaTimes size={30} /> : <FaBars size={30} />}
          </div>

          <div className="flex items-center flex-row justify-center gap-2 ">
            <a
              href="#"
              className="hover:text-[#ffd7d7] hover:scale-105  duration-300"
            >
              Logo App
            </a>
            <a href="https://pifsantiagoisabellabryan.vercel.app/">
              <img
                src="/logoPoli.svg"
                alt=""
                className="rounded-full object-contain hover:scale-105   md:h-24 md:w-24 h-20 w-20  duration-300    "
              />
            </a>
          </div>
        </div>
      </div>

      <div
        className={`fixed w-full  text-white z-10 left-0 h-fit py-12 lg:hidden flex justify-center text-center text-2xl duration-500 ${
          isMenuShown
            ? "top-16 rounded-b-2xl bg-gray-900 opacity-95"
            : "top-[-100%]"
        }`}
      >
        <ul>
          {links.map(({ id, link }) => (
            <Link
              onClick={() => setIsMenuShown(!isMenuShown)}
              to={link}
              smooth
              duration={500}
              key={id}
            >
              <li className="p-4 uppercase cursor-pointer duration-300 hover:text-thPrimary">
                {link}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
