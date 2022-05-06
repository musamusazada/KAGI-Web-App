import React from "react";
import { Text, Avatar, HStack, Divider } from "@chakra-ui/react";
function Comment(props) {
  return (
    <HStack spacing={4} marginBottom="7px">
      <Avatar
        size={"sm"}
        name={props.author}
        src={props.src}
        className="hover-effect"
      />
      <Text className="f-ssp hover-effect" fontWeight={600} fontSize={20}>
        {props.content}
      </Text>
    </HStack>
  );
}

export default Comment;
