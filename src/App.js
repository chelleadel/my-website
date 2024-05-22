import "./App.css";
import { Flex, Spacer, Stack } from "@chakra-ui/layout";
import { ChakraProvider, extendTheme, useBreakpointValue } from "@chakra-ui/react";
import Navbar from "./components/NavBar";
import React from "react";
import About from "./pages/About";
import Experiences from "./pages/Experiences";
import Projects from "./pages/Projects";
import Organisations from "./pages/OutsideWork";

function App() {
  return (
    <Flex flexDirection={{ base: "column", lg: "row" }} p={{ base: 10, md: 10 }} minHeight="100vh" maxW="100%">
      <Navbar />
      <Stack flex="2" spacing={10}>
        <About />
        <Experiences />
        <Projects />
        <Organisations />
        <Spacer />
        <Spacer />
        <Spacer />
      </Stack>
    </Flex>
  );
}

export default App;
