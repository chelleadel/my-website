import { ExternalLinkIcon } from "@chakra-ui/icons";
import { HStack, Text, Stack, Image, Link, Flex } from "@chakra-ui/react";
import React from "react";

export default function Outside({ startDate, endDate, title, company, description, images, link }) {
  const renderContent = () => {
    return (
      <HStack
        my={5}
        mr={7}
        alignItems={"flex-start"}
        gap={8}
        spacing={4}
        padding={10}
        _hover={link ? { backgroundColor: "rgba(204, 204, 204, 0.2)", borderRadius: "5px", backgroundOpacity: "0.5" } : {}}
        cursor={link ? "pointer" : ""}
      >
        <Text fontSize="sm" width="20%">
          {startDate} - {endDate}
        </Text>
        <Stack width={"80%"} gap={5}>
          <HStack justifyContent={"space-between"}>
            <Text fontSize="lg" fontWeight="bold">
              {title} - {company}
            </Text>
            {link && <ExternalLinkIcon />}
          </HStack>
          <Text opacity={0.6}>{description}</Text>
          <Flex flexDir={{ base: "column", md: "row" }} gap={3}>
            {images.map((image) => (
              <Image objectFit="cover" maxW={{ base: "100%", sm: "250px" }} src={image} alt={title} />
            ))}
          </Flex>
        </Stack>
      </HStack>
    );
  };

  return link ? (
    <Link href={link} isExternal _hover={{ textDecoration: "none" }}>
      {renderContent()}
    </Link>
  ) : (
    renderContent()
  );
}
