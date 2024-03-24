import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Card, CardBody, CardFooter, Text, Stack, Heading, CardHeader, HStack, VStack, Link, Flex } from "@chakra-ui/react";
import React from "react";
import TechStack from "./TechStack";

export default function Experience({ startDate, endDate, title, company, description, stacks, link }) {
  return (
    <Link href={link} isExternal _hover={{ textDecoration: "none" }}>
      <Flex
        alignItems={"flex-start"}
        gap={{ base: 2, sm: 8 }}
        p={{ base: 4, sm: 10 }}
        _hover={{ backgroundColor: "rgba(204, 204, 204, 0.1)", borderRadius: "5px", backgroundOpacity: "0.5" }}
        cursor="pointer"
        flexDir={{ base: "column", sm: "row" }}
      >
        <Text fontSize="sm" width={{ md: "20%" }} paddingTop={1}>
          {startDate} - {endDate}
        </Text>
        <Stack width={{ md: "80%" }} gap={5}>
          <HStack justifyContent={"space-between"}>
            <Text fontSize="lg" fontWeight="bold">
              {title} - {company}
            </Text>
            <ExternalLinkIcon />
          </HStack>

          <Text opacity={0.6}>{description}</Text>
          <HStack wrap="wrap">
            {stacks.map((stack) => (
              <TechStack framework={stack} />
            ))}
          </HStack>
        </Stack>
      </Flex>
    </Link>
  );
}
