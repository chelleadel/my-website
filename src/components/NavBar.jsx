// @ts-nocheck
import React, { useState } from "react";
import { Link as NavLink } from "react-scroll";
import { Box, Flex, Text, Stack, useColorModeValue, useColorMode, Button, HStack, Link, Image, VStack } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Mail, LogoGithub, LogoLinkedin } from "react-ionicons";
import { DownloadIcon } from "@chakra-ui/icons";

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("");

  // Desktop navigation
  const DesktopNav = () => {
    return (
      <Stack direction={"column"} spacing={6} py={5}>
        {["about", "experiences", "projects", "organisations"].map((section) => (
          <NavLink
            key={section}
            activeClass="active"
            to={section}
            spy={true}
            smooth={true}
            duration={500}
            onSetActive={(to) => {
              setActiveLink(to);
            }}
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
      <Flex
        position="sticky"
        gap={5}
        top={20}
        padding={{ md: 10 }}
        flexDir="column"
        color={useColorModeValue("gray.600", "gray.200")}
      >
        <Flex gap={5} justifyContent={"space-between"}>
          <Image
            src="/photo.jpg"
            maxH={{ base: "100px", sm: "100px" }}
            maxW={{ base: "100px", sm: "100px" }}
            style={{ borderRadius: "50%" }}
          ></Image>
          {/* <Button onClick={toggleColorMode}>{colorMode === "light" ? <MoonIcon /> : <SunIcon />}</Button> */}
        </Flex>
        <VStack alignItems={"flex-start"}>
          <Text fontFamily={"heading"} fontSize="xx-large" fontWeight="bold">
            Michelle Adeline
          </Text>
          <Text fontSize="lg" fontWeight="bold">
            Software Engineer Intern, Zenith Learning Group
          </Text>
          <Text>B. Comp. Information Systems (Honours) @ NUS </Text>
        </VStack>
        <HStack mt={3} gap={3}>
          <Link
            href="https://drive.google.com/file/d/1FncdUvHh_sCN3LSIquvEnQJuKJEoBPRq/view?usp=sharing"
            target="_blank"
            maxW={"40%"}
          >
            <Button>
              <DownloadIcon color={useColorModeValue("gray.600", "#fff")} />
              <Text opacity={0.9}>Resume</Text>
            </Button>
          </Link>
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
        <Flex display={{ base: "none", lg: "flex" }} mt={10}>
          <DesktopNav />
        </Flex>
        <MobileNav />
      </Flex>
    </Box>
  );
}
