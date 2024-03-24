// @ts-nocheck
import { Box, Text } from "@chakra-ui/react";
import { Element } from "react-scroll";
import React from "react";
import Project from "../components/Project";

export default function Projects() {
  const projects = [
    {
      image: "/projects/influx.png",
      title: "Influx",
      description:
        "Online marketplace to connect Brands and Influencers, enabling brands to purchase social media ad spaces. Integrated Stripe, YouTube, and Instagram APIs for enhanced functionality and scalability.",
      stacks: ["Next 13", "Node.js", "Firebase"],
    },
    {
      image: "/projects/youandi.png",
      title: "You&I",
      description: "Online text-messaging and match-making mobile application for NUS students, supporting iOS and Android.",
      stacks: ["Flutter", "Firebase"],
      link: "https://drive.google.com/file/d/1NhEoYg6UyCymIT52zH3gSeSn7ILH3cRv/view?usp=sharing",
      width: "70%",
    },
  ];

  return (
    <Element name="projects">
      {projects.map((project) => (
        <Project
          image={project.image}
          title={project.title}
          description={project.description}
          stacks={project.stacks}
          link={project.link}
          width={project?.width}
        />
      ))}
    </Element>
  );
}
