import { HStack, Text, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { Link as NavLink } from "react-scroll";
import { Element } from "react-scroll";
import React from "react";
import "./About.css";

export default function About() {
  return (
    // @ts-ignore
    <Element name="about">
      <Text fontWeight="bold">Hi! I'm Michelle 👋 </Text>
      <br />
      <Text>An energetic Software Engineer, who is passionate in building applications.</Text>
      <br />
      <Text>
        On May 2024, I graduated from the{" "}
        <a href={"https://www.comp.nus.edu.sg/programmes/ug/is/"} className={"links"} target="_blank">
          National University of Singapore
        </a>
        , majoring in Information Systems. Previously, I have{" "}
        <NavLink to={"experiences"} className={"links"} smooth={true} duration={500}>
          internships
        </NavLink>{" "}
        with Zenith Learning Group and Data4Life, building web and mobile applications. At school, I led{" "}
        <a href={"https://www.linkedin.com/company/nus-fintech-society/"} className={"links"} target="_blank">
          NUS Fintech Society
        </a>
        's Software Development department, developing up to 5 projects.
      </Text>
      <br />
      <Text>When I'm not at the computer, I'm usually dancing, whisking matcha or cafe hopping. 🥐 🍵 </Text>
    </Element>
  );
}
