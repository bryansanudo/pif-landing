import React from "react";
import { FaArrowDown } from "react-icons/fa";
import { TbPigMoney, TbZoomMoney } from "react-icons/tb";
import { MdMoneyOff } from "react-icons/md";
import avatar from "@/assets/hero.svg";
import { motion } from "framer-motion";
import { staggerContainer, zoomIn } from "@/utils/motion";
import { TypingText } from "@/components/CustomTexts";

const Hero = () => {
  /*  window.addEventListener("scroll", function () {
    const downArrow = document.querySelector(".down-arrow");

    if (this.scrollY >= 90) downArrow.classList.add("hide-down-arrow");
    else downArrow.classList.remove("hide-down-arrow");
  }); */

  return (
    <motion.section
      name="inicio"
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="min-h-screen flex flex-col justify-start items-center p-5 text-center pt-16"
    >
      {/* <TypingText
        title="Nombre de la aplicación"
        textStyles="font-bold text-4xl my-8 text-center text-transparent bg-clip-text  bg-gradient-to-r from-[#29A52D] to-[#5C24B3] hover:from-[#5C24B3] hover:to-[#29A52D] transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 md:text-5xl"
      /> */}

      <div className="">
        <div className="max-w-xl font-light text-gray-500 mb-10 gap-5 flex flex-col my-24 ">
          <article className="flex flex-col md:flex-row  items-center gap-5">
            <TbPigMoney className="text-3xl" />
            9/10 Personas mejoran sus ingresos y ahorran
          </article>
          <article className="flex flex-col md:flex-row  items-center gap-5">
            <TbZoomMoney className="text-3xl" />
            7/10 Pasan a tener más control sobre su dinero
          </article>
          <article className="flex flex-col md:flex-row  items-center gap-5">
            <MdMoneyOff className="text-3xl" />
            8/10 Disminuyen sus deudas e incluso las dejan atrás
          </article>
        </div>

        <img
          src="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/2149417562/settings_images/CAr0boI3Twe3nzShOPSY_hombre-prestamos-nuevo-2.gif"
          alt=""
          className=" h-[280px] w-full md:h-[400px] object-cover object-top bg-gradient-to-b from-[#29A52D] rounded-xl mb-20"
        />
        <a
          href="https://pif-firebase.vercel.app/"
          download={true}
          className="flex items-center justify-center  bg-gradient-to-r from-[#182C60] to-[#ffd7d7] text-white py-2 rounded-lg mb-10 hover:scale-110 duration-300"
        >
          Registrate gratis
        </a>
      </div>
    </motion.section>
  );
};

export default Hero;
