import React from "react";
import "react-vertical-timeline-component/style.min.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { styles } from "../styles";

import { experiences } from "../constants";

function Experience({ darkMode }) {
  const ExperienceCard = ({ experience }) => (
    <VerticalTimelineElement
      contentStyle={{
        background: darkMode ? "rgb(31 41 55) " : "#A15C38",
        color: darkMode ? "#292929" : "#fffbe5",
        boxShadow:
          "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
      }}
      contentArrowStyle={{
        borderRight: `7px solid ${darkMode} ? 'rgb(31 41 55)'  '#D0B49F' `,
      }}
      date={
        <div>
          <h3 className=" text-[16px] font-bold font-beckman text-color dark:text-neutral-100">
            {experience.date}
          </h3>
        </div>
      }
      iconStyle={{ background: darkMode ? "rgb(31 41 55)" : "#D0B49F" }}
      icon={
        <div className="flex justify-center items-center w-full h-full ">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className={`${styles.sectionSubText}`}>{experience.title}</h3>
        <p
          className="text-taupe text-[22px] dark:text-neutral-300 font-semibold font-overcameBold tracking-[1px]"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
        {experience.description?.map((element) => (
          <li className="dark:text-neutral-200">{element}</li>
        ))}
      </div>
    </VerticalTimelineElement>
  );

  return (
    <span className="hash-span" id="experience">
      &nbsp;
      <div className=" p-10">
        <h2 className={styles.sectionHeadText}>Experience</h2>

        <VerticalTimeline lineColor={darkMode ? "#eaeaec" : "#D0B49F"}>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </span>
  );
}

export default Experience;
