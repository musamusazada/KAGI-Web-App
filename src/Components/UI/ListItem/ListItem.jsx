import React from "react";
import { HStack, Text } from "@chakra-ui/react";
import { TiTick } from "react-icons/ti";
function ListItem(props) {
  return (
    <HStack spacing={3} marginY={4}>
      <TiTick className="hover-effect" />{" "}
      <Text className="hover-effect f-ssp" fontSize={25}>
        {props.content}
      </Text>
    </HStack>
  );
}

export default ListItem;
