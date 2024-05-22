import { HStack, Link, Text, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { Element } from "react-scroll";
import React from "react";

export default function About() {
  return (
    // @ts-ignore
    <Element name="about">
      <Text fontWeight="bold">Hi! I'm Michelle 👋 </Text>
      <br />
      <Text>
        An energetic Software Developer, who is passionate in building applications to live. My main interest lies on Frontend
        development, bringing designs to screens.
      </Text>
      <br />
      <Text>
        Through my years of studies in <b>NUS</b>, I've had the privilege of building software as an <b>intern</b> and explored{" "}
        <b>personal projects</b> based on my interests. NUS Fintech Society have also given me an opportunity to <b>lead</b> the
        Software Development Department, developing up to 5 projects this year.
      </Text>
      <br />
      <Text>When I'm not at the computer, I'm usually dancing, whisking matcha or cafe hopping ୧ ‧₊˚ 🥐 🍵 ⋅</Text>
    </Element>
  );
}
