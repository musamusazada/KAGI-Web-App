import { useState, useRef } from "react";
import { v4 as uuid } from "uuid";
import { collection, addDoc } from "firebase/firestore";
import { db, auth, storage } from "../../../firebase-config";
import { ref, uploadBytes } from "firebase/storage";

import {
  Button,
  Modal,
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
  const { displayName, photoURL } = auth.currentUser;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [tags, setTags] = useState([]);
  const articlesCollectionRef = collection(db, "articles");
  const description = useRef();

  function removeTag(removeIndex) {
    setTags(tags.filter((_, index) => index !== removeIndex));
  }
  function addTag(obj) {
    setTags((prev) => [...prev, obj]);
  }
  const handleSubmit = async (e) => {
    e.preventDefault();

    const title = e.target[0].value;
    const category = e.target[1].value;
    // const tag = tags;
    const _description = description.current.value;
    // const imageFile = e.target[4].files[0];
    // const filePath = `images/${imageFile.name + uuid()}`;
    // const imageRef = ref(storage, filePath);
    // uploadBytes(imageRef, imageFile).then(() => console.log("Success"));
    await addDoc(articlesCollectionRef, {
      title: title,
      category: category,
      // tag: tag,
      description: _description,
      // filename: filePath,
      createdAt: new Date().getDate(),
      photoURL,
      displayName,
    });
  };
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
            <form onSubmit={handleSubmit}>
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
              {/* <FormLabel htmlFor="tag">Tags</FormLabel>
              <FormControl mb={4}>
                <TagInput
                  id="tag"
                  tags={tags}
                  addMethod={addTag}
                  removeMethod={removeTag}
                />
              </FormControl> */}

              <FormControl>
                <FormLabel htmlFor="content">So what's up ?</FormLabel>
                <Textarea
                  resize="vertical"
                  focusBorderColor="black"
                  id="content"
                  type="text"
                  ref={description}
                />
                <FormHelperText>Content ^*-*^</FormHelperText>
              </FormControl>
              {/* <FormControl mt={7}>
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
              </FormControl> */}
              <Button
                marginTop="10"
                className="hover-effect"
                type="submit"
                colorScheme="blue"
              >
                Post
              </Button>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default CreateArticle;
