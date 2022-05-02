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
  FormErrorMessage,
  Input,
  FormHelperText,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import { RiEditFill } from "react-icons/ri";
import TagInput from "./TagInput";
function CreateArticle() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [tags, setTags] = useState([]);

  function removeTag(removeIndex) {
    setTags(tags.filter((_, index) => index !== removeIndex));
  }
  function addTag(obj) {
    setTags((prev) => [...prev, obj]);
  }
  return (
    <>
      <Box onClick={onOpen}>
        <Circle
          position="fixed"
          bottom="10px"
          left={["10px", "50px", "200px"]}
          boxShadow="lg"
          size={["35px", "50px"]}
          bg="whiteAlpha.900"
          transition="300ms"
          _hover={{
            bottom: "30px",
            backgroundColor: "whitesmoke",
            transform: "scale(1.2)",
          }}
        >
          <RiEditFill color="black" fontSize={["10px", "20px"]} />
        </Circle>
      </Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader className="f-ssp" fontWeight="700">
            Talk about it...
          </ModalHeader>
          <ModalCloseButton outline="none" />
          <ModalBody>
            <FormControl mb={4}>
              <FormLabel htmlFor="title">Title</FormLabel>
              <Input focusBorderColor="black" id="title" type="text" />
              <FormHelperText>Be fancy</FormHelperText>
            </FormControl>
            <FormControl mb={4}>
              <FormLabel htmlFor="category">Category</FormLabel>
              <Input focusBorderColor="black" id="category" type="text" />
              <FormHelperText>Choose Category</FormHelperText>
            </FormControl>
            <FormLabel htmlFor="tag">Tags</FormLabel>
            <FormControl mb={4}>
              <TagInput
                id="tag"
                tags={tags}
                addMethod={addTag}
                removeMethod={removeTag}
              />
            </FormControl>

            <FormControl>
              <FormLabel htmlFor="content">So what's up ?</FormLabel>
              <Textarea
                resize="vertical"
                focusBorderColor="black"
                id="content"
                type="text"
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
                Upload Image
              </FormLabel>
              <Input id="file" display="none" type="file" />
              <FormHelperText>Cover Image</FormHelperText>
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

export default CreateArticle;
