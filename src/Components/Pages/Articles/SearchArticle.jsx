import React from "react";
import {
  Box,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalBody,
  Input,
  Circle,
  HStack,
  ModalHeader,
  useDisclosure,
  ModalOverlay,
} from "@chakra-ui/react";
import { HiOutlineSearch } from "react-icons/hi";
function SearchArticle() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box onClick={onOpen}>
        <Circle
          position="fixed"
          bottom={["50px", "10px"]}
          left={["10px", "90px", "270px"]}
          boxShadow="lg"
          size={["35px", "50px"]}
          bg="whiteAlpha.900"
          transition="300ms"
        >
          <HiOutlineSearch color="black" fontSize={["10px", "20px"]} />
        </Circle>
      </Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />

        <ModalContent>
          <ModalHeader>Search</ModalHeader>
          <ModalCloseButton outline="none" />
          <ModalBody>
            <Input focusBorderColor="black" placeholder="(^=^)" />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default SearchArticle;
