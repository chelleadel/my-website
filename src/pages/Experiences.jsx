// @ts-nocheck
import { Box, Text } from "@chakra-ui/react";
import { Element } from "react-scroll";
import React from "react";
import Experience from "../components/Experience";

export default function Experiences() {
  const experiences = [
    {
      startDate: "Jan 2024",
      endDate: "Present",
      title: "Software Engineer Intern",
      company: "Zenith Learning Group",
      description:
        "Develop cross-platform educational mobile application by building screens and critical components. Work closely with scrum teams, including developers, designers and product managers, to implement best practices.",
      stacks: ["React Native", "iOS", "Android", "Node.js", "PostgreSQL"],
      link: "https://www.zenithlearninggroup.com/zendora",
    },
    {
      startDate: "May",
      endDate: "Dec 2022",
      title: "Full Stack Software Developer Intern",
      company: "Data4Life Asia",
      description:
        "Integrate third-party notebook plugin into web solution, while collaborating with cross-functional scrum team. Build database tables, improve query performance and developed RESTful APIs for seamless backend communications.",
      stacks: ["React.js", "Node.js"],
      link: "https://www.data4life-asia.care/",
    },
    {
      startDate: "Jun",
      endDate: "July 2021",
      title: "Product Management Intern",
      company: "WooHoo",
      description:
        "Develop product solutions tailored to end-users while thriving in a fast-paced startup environment and communication with important stakeholders. Also, conducted product testing.",
      stacks: ["Voice AI", "Hardware"],
      link: "https://heywoohoo.com/",
    },
  ];

  return (
    <Element name="experiences">
      {experiences.map((experience) => (
        <Experience
          startDate={experience.startDate}
          endDate={experience.endDate}
          title={experience.title}
          company={experience.company}
          description={experience.description}
          stacks={experience.stacks}
          link={experience.link}
        />
      ))}
    </Element>
  );
}
