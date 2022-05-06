import React from "react";
import { Box, VStack, Text, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
function Course(props) {
  return (
    <Link to={"/courses/course/" + props.id}>
      <VStack>
        <Box width={["100%", "500px"]} height="300px" overflow="hidden">
          <Image
            _hover={{ transform: "scale(1.3)" }}
            className="hover-effect"
            src={props.image}
            w="100%"
            h="100%"
            transition=".3s"
          />
        </Box>
        <Text
          _hover={{ borderBottom: "1px solid black" }}
          alignSelf="start"
          fontSize={["lg", null, "xl"]}
          className="f-ssp"
        >
          " {props.title} " by {props.author}
        </Text>
      </VStack>
    </Link>
  );
}

export default Course;
