import React from "react";
import MainLayout from "../layout/MainLayout";
import "react-vertical-timeline-component/style.min.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
function About() {
  return (
    <MainLayout>
      <div className=" p-10">
        <h2 className="text-5xl text-center py-2 text-teal-600 font-medium">
          About
        </h2>

        <VerticalTimeline lineColor="gray">
          <VerticalTimelineElement
            contentStyle={{
              borderRadius: "15px 15px 15px 15px",
              background: "white",
              color: "rgb(13 148 136)",
              borderColor: "rgb(13 148 136)",
              borderWidth: "3px",
            }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(13 148 136)" }}
            date="2011 - present"
            iconStyle={{ background: "rgb(13 148 136)", color: "#fff" }}
          >
            <h3 className="font-mono">Software Engineer Intern</h3>
            <h4 className="italic">abillion</h4>
            <p>
              Revamped the mobile application and website with React Native and
              ReactJS Collaborate cross-functionally with design, engineering,
              data , and product teams to identify and deliver new product
              solutions and enhance existing products Participate in sprint
              planning for every iteration Troubleshooting and debugging
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            contentStyle={{
              borderRadius: "15px 15px 15px 15px",
              background: "white",
              color: "rgb(13 148 136)",
              borderColor: "rgb(13 148 136)",
              borderWidth: "3px",
            }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(13 148 136)" }}
            date="2011 - present"
            iconStyle={{ background: "rgb(13 148 136)" }}
          >
            <h3>Creative Director</h3>
            <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
            <p>
              Creative Direction, User Experience, Visual Design, Project
              Management, Team Leading
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </MainLayout>
  );
}

export default About;
