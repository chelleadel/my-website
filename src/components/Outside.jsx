import { ExternalLinkIcon } from "@chakra-ui/icons";
import { HStack, Text, Stack, Image, Link, Flex } from "@chakra-ui/react";
import React from "react";

export default function Outside({ startDate, endDate, title, company, description, images, link }) {
  const imageSize = 100 / images.length;

  const renderContent = () => {
    return (
      <Flex
        alignItems={"flex-start"}
        gap={{ base: 3, md: 8 }}
        p={{ base: 4, md: 10 }}
        _hover={link ? { backgroundColor: "rgba(204, 204, 204, 0.2)", borderRadius: "5px", backgroundOpacity: "0.5" } : {}}
        cursor={link ? "pointer" : ""}
        flexDir={{ base: "column", md: "row" }}
      >
        <Text fontSize="sm" width={{ md: "20%" }}>
          {startDate} - {endDate}
        </Text>
        <Stack width={{ md: "80%" }} gap={5}>
          <HStack justifyContent={"space-between"}>
            <Text fontSize="lg" fontWeight="bold">
              {title} - {company}
            </Text>
            {link && <ExternalLinkIcon />}
          </HStack>
          <Text opacity={0.6}>{description}</Text>
          <Flex flexDir={{ base: "column", sm: "row" }} gap={3}>
            {images.map((image) => (
              <Image objectFit="cover" maxW={{ base: "100%", sm: `${imageSize}%` }} src={image} alt={title} />
            ))}
          </Flex>
        </Stack>
      </Flex>
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
