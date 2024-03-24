import { ExternalLinkIcon } from "@chakra-ui/icons";
import { HStack, Text, Stack, Flex, Image, Link } from "@chakra-ui/react";
import React from "react";
import TechStack from "./TechStack";

export default function Project({ image, title, description, stacks, link, width }) {
  const renderProjectInfo = () => {
    return (
      <Flex
        alignItems={"flex-start"}
        gap={{ base: 3, md: 8 }}
        p={{ base: 4, md: 10 }}
        _hover={link ? { backgroundColor: "rgba(204, 204, 204, 0.2)", borderRadius: "5px", backgroundOpacity: "0.5" } : {}}
        cursor={link ? "pointer" : ""}
        flexDir={{ base: "column", md: "row" }}
      >
        <Flex width={{ base: "100%", md: "35%" }} maxH={{ base: 200 }} justifyContent={{ base: "flex-start", sm: "center" }}>
          <Image objectFit="contain" maxW={{ base: "100%", sm: width }} src={image} alt={title} />
        </Flex>
        <Stack width={{ md: "80%" }} gap={5}>
          <HStack justifyContent={"space-between"}>
            <Text fontSize="lg" fontWeight="bold">
              {title}
            </Text>
            {link && <ExternalLinkIcon />}
          </HStack>
          <Text opacity={0.6}>{description}</Text>
          <HStack wrap="wrap">
            {stacks.map((stack) => (
              <TechStack framework={stack} />
            ))}
          </HStack>
        </Stack>
      </Flex>
    );
  };
  return link ? (
    <Link href={link} isExternal _hover={{ textDecoration: "none" }}>
      {renderProjectInfo()}
    </Link>
  ) : (
    renderProjectInfo()
  );
}
