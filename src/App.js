import "./App.css";
import { Flex, Stack } from "@chakra-ui/layout";
import { ChakraProvider, extendTheme, useBreakpointValue } from "@chakra-ui/react";
import Navbar from "./components/NavBar";
import React from "react";
import About from "./pages/About";
import Experiences from "./pages/Experiences";
import Projects from "./pages/Projects";
import OutsideWork from "./pages/OutsideWork";

function App() {
  return (
    <Flex flexDirection={{ base: "column", md: "row" }} p={{ base: 10, md: 20 }} minHeight="100vh" maxWidth="100%">
      <Navbar />
      <Stack flex="2" spacing={10}>
        <About />
        <Experiences />
        <Projects />
        <OutsideWork />
      </Stack>
    </Flex>
  );
}

export default App;
