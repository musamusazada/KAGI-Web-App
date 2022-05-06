import React from "react";
import { Text, HStack } from "@chakra-ui/react";

function UserInfo(props) {
  return (
    <HStack justifyContent="space-around">
      {props.icon}
      <Text className="underline-hover f-ssp" fontSize="2xl">
        {props.title}
      </Text>
    </HStack>
  );
}

export default UserInfo;
