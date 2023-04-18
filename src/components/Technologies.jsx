import { useState } from "react";
import { motion } from "framer-motion";

import { staggerContainer } from "@/utils/motion";

import TechnologieCard from "@/components/TechnologieCard";
import Section from "@/components/common/Section";

const Technologies = () => {
  const [active, setActive] = useState("tec-2");

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
      <Section
        name="seccion 2"
        title="sección 2"
        subtitle="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt laudantium eligendi deleniti commodi officiis beatae, cupiditate, fuga a assumenda at architecto facilis voluptas suscipit temporibus laborum labore eum similique asperiores!"
      >
        {/* <div className=" grid grid-cols-2 gap-5  lg:grid-cols-5 ">
          {tecs.map((world, index) => (
            <TechnologieCard
              key={world.id}
              {...world}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div> */}
      </Section>
    </motion.div>
  );
};

export default Technologies;
