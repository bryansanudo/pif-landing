import React from "react";
import Section from "@/components/common/Section";
import { FaGithub, FaExternalLinkSquareAlt } from "react-icons/fa";

import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/utils/motion";

const Portfolio = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
      <Section
        name="seccion 1"
        title="sección 1"
        subtitle="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt laudantium eligendi deleniti commodi officiis beatae, cupiditate, fuga a assumenda at architecto facilis voluptas suscipit temporibus laborum labore eum similique asperiores!"
      >
        {/* <div className="grid gap-8 lg:gap-14 lg:grid-cols-2">
          {projects.map(({ id, image, title, github, demo }) => (
            <motion.div
              variants={fadeIn("right", "spring", id * 0.5, 0.75)}
              key={id}
              className="max-w-lg flex shadow-lg shadow-gray-300 rounded-2xl overflow-hidden"
            >
              <img src={image} alt={title} className="w-2/3" />
              <div className="w-1/3 flex flex-col items-center justify-evenly p-1">
                <h2 className="font-medium ">{title}</h2>
                <a
                  href={github}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="text-2xl cursor-pointer duration-300  hover:scale-125"
                >
                  <FaGithub />
                </a>
                <a
                  href={demo}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="text-2xl cursor-pointer duration-300 animate-pulse hover:scale-125"
                >
                  <FaExternalLinkSquareAlt className="" />
                </a>
              </div>
            </motion.div>
          ))}
        </div> */}
      </Section>
    </motion.div>
  );
};

export default Portfolio;
