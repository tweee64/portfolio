import React from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant, staggerContainer } from "../utils/motion";
import { services } from "../constants";

import { styles } from "../styles";

function About() {
  const ServiceCard = ({ index, title, icon }) => {
    return (
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="xs:w-[250px] w-full sm:w-1/5 border-neutral-300 dark:border-gray-800 p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-color-about dark:bg-gray-800 rounded-[20px] pt-10 pb-5 px-12 min-h-[280px] grid grid-rows-2 "
        >
          <img
            src={icon}
            alt={title}
            className="w-16 h-16 object-contain dark:text-black inline-block justify-self-center "
          />
          <h3 className="text-on-card text-[18px] font-bold text-center dark:text-neutral-300">
            {title}
          </h3>
        </div>
      </motion.div>
    );
  };

  return (
    <span id="about">
      <div className=" p-10">
        <div></div>
        <motion.section
          variants={staggerContainer()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className={` `}
        >
          <motion.div variants={textVariant()}>
            {" "}
            <h2 className={styles.sectionHeadText}>About</h2>{" "}
            <p className={styles.sectionSubText}>Introduction</p>
          </motion.div>
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px] dark:text-neutral-100"
          >
            Focused, results-driven and passionate about technology, I am
            particularly interested in front-end developer roles and
            product-related roles that help to connect and bring technology to
            people and businesses.
            <li>
              {" "}
              Hands-on experience with Front-end development tools, APIs and
              prototyping frameworks
            </li>
            <li>
              Effective communicator who frequently collaborates
              cross-functionally with seniors in the technology sector
            </li>
            <li>
              A fast learner, team player and leader who thrives in fast-paced
              and challenging environment self-driven individuals who is humble
              to learn and contribute
            </li>
          </motion.p>

          <div className="mt-20 flex flex-col sm:flex-row sm:justify-between flex-wrap gap-10 ">
            {services.map((service, index) => (
              <ServiceCard key={service.title} index={index} {...service} />
            ))}
          </div>
        </motion.section>
      </div>
    </span>
  );
}

export default About;
