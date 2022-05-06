import React from "react";
import { Avatar, Text, HStack, VStack } from "@chakra-ui/react";
function Author(props) {
  return (
    <HStack spacing={4}>
      <Avatar size={props.size} name={props.author} src={props.source} />
      <VStack alignItems="start" spacing={1}>
        <Text className="f-ssp hover-effect" fontWeight="600" fontSize="md">
          by {props.name}
        </Text>
        <Text fontFamily={"fantasy"} fontSize="sm" color="darkgray">
          {props.date}
        </Text>
      </VStack>
    </HStack>
  );
}

export default Author;
