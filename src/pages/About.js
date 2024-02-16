import React from "react";
import MainLayout from "../layout/MainLayout";
import { motion } from "framer-motion";
import { fadeIn, textVariant, staggerContainer } from "../utils/motion";
import { services } from "../constants";

import { styles } from "../styles";

function About() {
  const ServiceCard = ({ index, title, icon }) => {
    return (
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="xs:w-[250px] w-1/5 card-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-jetLight rounded-[20px] py-5 px-12 min-h-[280px]  "
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-taupe text-[18px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    );
  };

  return (
    <MainLayout>
      <div className=" p-10">
        <h2 className="text-5xl text-center py-2 text-teal-600 font-medium">
          About
        </h2>
        <div></div>
        <motion.section
          variants={staggerContainer()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className={` `}
        >
          <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>Introduction</p>
            <h2 className={styles.sectionHeadText}>Overview.</h2>{" "}
          </motion.div>
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]"
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis
            sapiente ipsum dolorum dicta eaque cumque inventore molestias,
            beatae ea quaerat alias accusamus voluptas autem! Alias odit
            voluptates in totam vitae dignissimos minus eaque culpa unde tempore
            dolore aperiam obcaecati voluptatum aliquam corrupti, suscipit
            accusamus! Odit unde veniam dolorum ipsum doloribus.
          </motion.p>

          <div className="mt-20 flex justify-between flex-wrap gap-10 ">
            {services.map((service, index) => (
              <ServiceCard key={service.title} index={index} {...service} />
            ))}
          </div>
        </motion.section>
      </div>
    </MainLayout>
  );
}

export default About;
