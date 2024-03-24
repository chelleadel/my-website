import React from "react";
import { Text, Flex, useColorModeValue } from "@chakra-ui/react";

function TechStack(props) {
  return (
    <Flex borderRadius={100} px={3} mr={1.5} style={{ backgroundColor: "rgba(255, 182, 193, 0.3)" }}>
      <Text color={useColorModeValue("pink.300", 'lightpink')} fontWeight={"bold"} fontSize={"sm"}>
        {props.framework}
      </Text>
    </Flex>
  );
}
export default TechStack;
