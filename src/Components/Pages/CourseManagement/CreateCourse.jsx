import { useState } from "react";
import {
  Button,
  Modal,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Circle,
  Box,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import { IoCreate } from "react-icons/io5";
function CreateCourse() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box onClick={onOpen}>
        <Circle
          position="fixed"
          bottom="10px"
          right={["10px", "50px", "30px"]}
          boxShadow="lg"
          size={["35px", "50px"]}
          bg="whiteAlpha.900"
          transition="300ms"
        >
          <IoCreate color="black" fontSize={["10px", "20px"]} />
        </Circle>
      </Box>
      <Modal isOpen={isOpen} onClose={onClose} size="5xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader className="f-ssp" fontWeight="700">
            Share your work or knowledge
          </ModalHeader>
          <ModalCloseButton outline="none" />
          <ModalBody>
            <FormControl mb={4}>
              <FormLabel htmlFor="title">Title</FormLabel>
              <Input focusBorderColor="black" id="title" type="text" />
              <FormHelperText>Describe your work well.</FormHelperText>
            </FormControl>
            <FormControl mb={4}>
              <FormLabel htmlFor="category">Category</FormLabel>
              <Input focusBorderColor="black" id="category" type="text" />
              <FormHelperText>Your content's topic</FormHelperText>
            </FormControl>

            <FormControl mb={4}>
              <FormLabel htmlFor="content">Description</FormLabel>
              <Textarea
                resize="vertical"
                focusBorderColor="black"
                id="content"
                type="text"
                placeholder="For whom is this course for ?"
              />
              <FormHelperText>Content ^*-*^</FormHelperText>
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="content">
                What people are going to learn ?
              </FormLabel>
              <Textarea
                resize="vertical"
                focusBorderColor="black"
                id="content"
                type="text"
                placeholder="For whom is this course for ?"
              />
              <FormHelperText>Content ^*-*^</FormHelperText>
            </FormControl>
            <FormControl mt={7}>
              <FormLabel
                color="black"
                className="f-ssp hover-effect"
                fontWeight="600"
                border="1px solid black"
                textAlign="center"
                bg="whitesmoke"
                rounded={5}
                width="150px"
                padding={3}
                htmlFor="file"
                _hover={{ bg: "black", color: "white" }}
              >
                Upload Video
              </FormLabel>
              <Input id="file" display="none" type="file" />
              <FormHelperText>Video</FormHelperText>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button className="hover-effect" colorScheme="blue">
              Post
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default CreateCourse;
