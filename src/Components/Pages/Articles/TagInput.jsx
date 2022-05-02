import React from "react";
import { Flex, HStack, Input, Box } from "@chakra-ui/react";
import { FiX } from "react-icons/fi";
function TagInput(props) {
  const removeTagHandler = (index) => {
    props.removeMethod(index);
  };
  const addTagHandler = (e) => {
    props.addMethod(e.target.value);
    e.target.value = "";
  };
  return (
    <HStack
      border="1px"
      borderRadius="md"
      borderColor="blackAlpha.900"
      paddingLeft="3"
      transition=".2s"
      _hover={{ borderColor: "gray.300" }}
    >
      <HStack flexWrap="wrap" padding="1">
        {props.tags.map((el, index) => {
          return (
            <Flex
              alignItems="center"
              justifyContent="center"
              padding="3px 6px"
              key={index}
              bgColor="blackAlpha.900"
              color="white"
              borderRadius="md"
              gap="4px"
            >
              {el}
              <FiX onClick={() => removeTagHandler(index)} />
            </Flex>
          );
        })}
      </HStack>
      <Input
        width={"30%"}
        border="none"
        placeholder="Enter tag"
        focusBorderColor="none"
        id="title"
        type="text"
        onKeyUp={(e) => (e.key === "Enter" ? addTagHandler(e) : null)}
      />
    </HStack>
  );
}

export default TagInput;
