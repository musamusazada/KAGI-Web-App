import React from "react";
import { HStack, VStack, Avatar, Text, Box } from "@chakra-ui/react";

function Message(props) {
  return (
    <VStack alignItems="start">
      <HStack spacing="3">
        <Avatar size={"xs"} name={props.name} src={props.src} />
        <Text>{props.name}</Text>
      </HStack>
      <Box
        bg={"blue.300"}
        minW="280px"
        padding="1"
        paddingLeft={"2.5"}
        borderRadius={"2xl"}
      >
        <Text fontSize={"2xl"} color="#fff">
          {props.text}
        </Text>
      </Box>
    </VStack>
  );
}

export default Message;
