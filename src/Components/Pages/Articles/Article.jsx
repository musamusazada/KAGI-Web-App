import React from "react";
import { VStack, HStack, Text, Box } from "@chakra-ui/react";
import { Link, useParams } from "react-router-dom";

import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import Author from "../../Author";
function Article(props) {
  return (
    <Link to={"/articles/article/" + props.id}>
      <VStack spacing={8} w={["100%", "700px"]}>
        <Text
          className="f-ssp"
          alignSelf="start"
          fontWeight={600}
          fontSize="sm"
          letterSpacing={1}
        >
          {props.date} in {props.tag}
        </Text>
        <HStack alignSelf="start" spacing={3}>
          <sup style={{ fontSize: "1.5rem" }}>
            <FaQuoteLeft />
          </sup>
          <Text
            className="f-ssp hover-effect underline-hover"
            fontWeight={600}
            fontSize={["2xl", null, "4xl"]}
          >
            {props.title}
            <br />
          </Text>
          <sup style={{ fontSize: "1.5rem" }}>
            <FaQuoteRight />
          </sup>
        </HStack>
        <Box alignSelf="start">
          <Author size="sm" name={props.author} source={props.source} />
        </Box>
      </VStack>
    </Link>
  );
}

export default Article;
