// @ts-nocheck
import React, { useState } from "react";
import { Link as NavLink } from "react-scroll";
import { Box, Flex, Text, Stack, useColorModeValue, useColorMode, Button, HStack, Link } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Mail, LogoGithub, LogoLinkedin } from "react-ionicons";

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("");

  // Desktop navigation
  const DesktopNav = () => {
    return (
      <Stack direction={"column"} spacing={6} py={5}>
        {["about", "experiences", "projects", "organisations"].map((section) => (
          <NavLink
            activeClass="active"
            to={section}
            spy={true}
            smooth={true}
            duration={500}
            onSetActive={(to) => setActiveLink(to)}
          >
            <Text fontWeight={activeLink === section ? "bold" : "normal"} cursor="pointer" position="relative">
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Text>
          </NavLink>
        ))}
      </Stack>
    );
  };

  // Mobile navigation
  const MobileNav = () => {
    return (
      <Stack p={5} display={{ md: "none" }}>
        <></>
      </Stack>
    );
  };

  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box>
      <Flex position="sticky" top={20} padding={{ sm: 10 }} flexDir="column" color={useColorModeValue("gray.600", "gray.200")}>
        <Flex gap={5}>
          <Flex flexDir="column" mb="4">
            <Text fontFamily={"heading"} fontSize="xx-large" fontWeight="bold">
              Michelle Adeline
            </Text>
            <Text fontSize="lg" fontWeight="bold">
              Software Engineer Intern, Zenith Learning Group
            </Text>
            <Text>B. Comp. Information Systems (Honours) @ NUS </Text>
          </Flex>
          <Button onClick={toggleColorMode}>{colorMode === "light" ? <MoonIcon /> : <SunIcon />}</Button>
        </Flex>
        <Text color="gray.500">Just keep swimming</Text>
        <HStack mt={3} gap={3}>
          <Link href="https://github.com/chelleadel" isExternal>
            <LogoGithub color={useColorModeValue("gray.600", "#fff")} title={"Github"} height="25px" />
          </Link>
          <Link href="https://www.linkedin.com/in/michelleadeline/" isExternal>
            <LogoLinkedin color={useColorModeValue("gray.600", "#fff")} title={"Github"} height="25px" />
          </Link>
          <Link href="mailto:michelleadelinee@gmail.com" isExternal>
            <Mail color={useColorModeValue("gray.600", "#fff")} title={"Github"} height="25px" />
          </Link>
        </HStack>
        <Flex display={{ base: "none", md: "flex" }} mt={10}>
          <DesktopNav />
        </Flex>
        <MobileNav />
      </Flex>
    </Box>
  );
}
