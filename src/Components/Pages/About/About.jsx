import React from "react";
import {
  Box,
  HStack,
  VStack,
  Image,
  Text,
  Heading,
  ChakraProvider,
} from "@chakra-ui/react";
import aboutImg from "../../../Assets/About/about.jpg";
function About() {
  return (
    <VStack
      w="100%"
      h="100vh"
      overflowY="scroll"
      className="pageLoadAnimation scrollStatus"
      justifyContent="center"
    >
      <HStack spacing={5}>
        <Heading className="f-abril" fontSize={["4xl", "4xl", "9xl"]}>
          Kagi
        </Heading>
        <Image
          className="hover-effect"
          transform={["translateY(-40%)", "translateY(-35%)"]}
          width={["260px", "350px", "500px"]}
          src={aboutImg}
          borderRadius={9}
          boxShadow={"lg"}
        />
      </HStack>
    </VStack>
  );
}

export default About;
