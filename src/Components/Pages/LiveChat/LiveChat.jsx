import { useState, useEffect } from "react";
import { VStack, HStack, Input, Box, Flex } from "@chakra-ui/react";
import Message from "./Message";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "../../../firebase-config";
import { auth } from "../../../firebase-config";
import { Button } from "@chakra-ui/react";
import { FiSend } from "react-icons/fi";
import liveChatBG from "../../../Assets/LiveChat/livachat-bg.mp4";
function LiveChat() {
  const { displayName, photoURL } = auth.currentUser;
  const [messages, setMessages] = useState([]);
  const messagesCollectionRef = collection(db, "messages");
  useEffect(() => {
    const getMessages = async () => {
      const data = await getDocs(messagesCollectionRef);
      setMessages(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getMessages();
  }, [messagesCollectionRef]);

  const newMessage = async (e) => {
    e.preventDefault();
    if (e.target[0].value.trim() !== "") {
      await addDoc(messagesCollectionRef, {
        text: e.target[0].value,
        createdAt: new Date().getDate(),
        photoURL,
        displayName,
      });
    }

    e.target[0].value = "";
  };

  return (
    <>
      <HStack
        alignItems={"end"}
        justifyContent="center"
        className="pageLoadAnimation"
        w="100%"
        h="100vh"
        padding={50}
      >
        <video
          className="account-bg-video"
          src={liveChatBG}
          autoPlay
          loop
        ></video>
        <VStack
          justifyContent="end"
          alignItems={"start"}
          h="100%"
          w="50%"
          spacing="20"
          bg={"whiteAlpha.800"}
          padding="10"
          borderRadius={"lg"}
          boxShadow="lg"
        >
          <VStack spacing={"7"} overflowY="scroll" height="100%">
            {messages.map((el) => (
              <Message
                key={el.id}
                name={el.displayName}
                src={el.photoURL}
                text={el.text}
                date={el.createdAt}
              />
            ))}
          </VStack>
          <Box w="100%">
            <form w="100%" onSubmit={newMessage}>
              <HStack w="100%">
                <Input
                  type="text"
                  placeholder="write..."
                  onFocus={"none"}
                  w="90%"
                />
                <Button bg={"none"} type="submit" onFocus="none">
                  <FiSend />
                </Button>
              </HStack>
            </form>
          </Box>
        </VStack>
      </HStack>
    </>
  );
}
export default LiveChat;
