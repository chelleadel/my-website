// @ts-nocheck
import { Box, Text } from "@chakra-ui/react";
import { Element } from "react-scroll";
import React from "react";
import Outside from "../components/Outside";

export default function OutsideWork() {
  const outsideWorks = [
    {
      startDate: "July 2024",
      endDate: "Now",
      title: "Software Development Director",
      company: "NUS Fintech Society",
      description:
        "Led a 40-member cross-functional team of software engineers, designers, and product managers in developing fintech software applications. The projects include NFT-integrated E-commerce Web Application, Order Book simulation and Members Management Platform.",
      images: ["/organisations/firstcohesion.jpeg", "/organisations/exco.jpg"],
      link: "https://fintechsociety.comp.nus.edu.sg/",
    },
    {
      startDate: "July 2022",
      endDate: "Aug 2023",
      title: "Software Engineer",
      company: "NUS Fintech Society",
      description:
        "Integrating computer vision model that detect severity of car damages, to a web application. Uses React.js and Node.js for development.",
      images: [],
      link: "https://fintechsociety.comp.nus.edu.sg/",
    },
  ];
  return (
    <Element name="organisations">
      {outsideWorks.map((outsideWork) => (
        <Outside
          startDate={outsideWork.startDate}
          endDate={outsideWork.endDate}
          title={outsideWork.title}
          company={outsideWork.company}
          description={outsideWork.description}
          images={outsideWork.images}
          link={outsideWork.link}
        />
      ))}
    </Element>
  );
}
