import React from "react";
import {
  Center,
  VStack,
  Image,
  Heading,
  Text,
  HStack,
  Flex,
  Divider,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import Author from "../../../Author";
import authorPP from "../../../../Assets/ProfilePics/author1.jpeg";
import plantTree from "../../../../Assets/Articles/scenery.jpg";
import ScrollBar from "../../../UI/ScrollBar/Scrollbar";
import SocialButton from "../../../UI/SocialMedia/SocialButton";

//Dummy article data
const DUMMY_DATA = {
  author: "Jerome Willhenberg",
  authorSource: authorPP,
  date: "Aug 21, 2022",
  title: "Life is strange",
  category: "lifestyle",
  tags: ["best", "life", "trend"],
  coverImage: plantTree,
  content: "I wish it was true 2x",
};

function ArticleDetail() {
  const urlParams = useParams();
  //Id for database fetching
  const articleID = urlParams.articleDetail;

  return (
    <Center
      w="100%"
      minH="100vh"
      overflowY="scroll"
      className="pageLoadAnimation scrollStatus"
      paddingTop={[30, null, 60]}
      paddingStart="20px"
      paddingEnd="20px"
      paddingBottom={10}
    >
      <VStack spacing="5">
        <Author
          size="lg"
          name={DUMMY_DATA.author}
          source={DUMMY_DATA.authorSource}
          marginBottom="20px"
          date={DUMMY_DATA.date}
        />
        <Heading className="f-ssp" fontSize={["5xl", null, "7xl"]}>
          {DUMMY_DATA.title}
        </Heading>
        <HStack spacing={5}>
          <Flex alignItems="center" justifyContent="center">
            <Text className="f-ssp">Category: </Text>
            <Text
              className="hover-effect"
              transition="1s"
              _hover={{ color: "#000" }}
              fontFamily={"sans-serif"}
              color="darkgray"
              fontSize="sm"
              marginStart={1}
              fontWeight={"bold"}
            >
              {DUMMY_DATA.category}
            </Text>
          </Flex>
          <Flex>
            <Text className="f-ssp">Tags: </Text>
            {DUMMY_DATA.tags.map((el) => (
              <Text
                fontWeight={"bold"}
                className="hover-effect"
                transition="1s"
                color="darkgray"
                fontSize="sm"
                _hover={{ color: "#000" }}
                marginStart={1}
              >
                #{el}
              </Text>
            ))}
          </Flex>
        </HStack>
        <Image
          maxW="100%"
          width={["100%", "300px", "500px", "800px"]}
          className="hover-effect"
          src={DUMMY_DATA.coverImage}
          borderRadius={10}
          boxShadow={"xl"}
        />
        <Divider />
        <Text
          className="f-ssp letter-effect"
          fontSize={"3xl"}
          fontWeight="semibold"
          alignSelf="start"
          _selection="black"
        >
          {DUMMY_DATA.content}
        </Text>
        <Text fontFamily="f-ssp" fontWeight="600" alignSelf="start">
          Share on social media
        </Text>
        <HStack alignSelf="start">
          <SocialButton media="facebook" />
          <SocialButton media="twitter" />
          <SocialButton media="linkedin" />
        </HStack>
      </VStack>

      <ScrollBar />
    </Center>
  );
}

export default ArticleDetail;
