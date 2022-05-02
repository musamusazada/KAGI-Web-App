import React from "react";
import { VStack, Heading, Divider } from "@chakra-ui/react";
import CreateArticle from "./CreateArticle";
import Article from "./Article";
import Scrollbar from "../../UI/ScrollBar/Scrollbar";
import Author1 from "../../../Assets/ProfilePics/author1.jpeg";
import SearchArticle from "./SearchArticle";

const ArticleData = [
  {
    id: "a1",
    author: "Jane Sullivan",
    source: Author1,
    title: "Serio in do viosselle cuih ro duendo do viosselle cuih ro duendo ",
    date: "17 April, 2022",
    tag: "language",
  },
  {
    id: "a2",
    author: "Draken Jueeno",
    source: Author1,
    title: "Serio in do viosselle cuih ro duendo",
    date: "17 April, 2022",
    tag: "lifestyle",
  },
  {
    id: "a3",
    author: "Pheno Loissel",
    source: Author1,
    title: "Serio in do viosselle cuih ro duendo",
    date: "17 April, 2022",
    tag: "cooking",
  },
  {
    id: "a4",
    author: "Anne Smith",
    source: Author1,
    title: "Serio in do viosselle cuih ro duendo",
    date: "17 April, 2022",
    tag: "sql",
  },
  {
    id: "a5",
    author: "Jane Sullivan",
    source: Author1,
    title: "Serio in do viosselle cuih ro duendo",
    date: "17 April, 2022",
    tag: "react",
  },
];
function Articles() {
  return (
    <>
      <VStack
        className="pageLoadAnimation scrollStatus"
        spacing={50}
        w="100%"
        h="100vh"
        overflowY="scroll"
        padding={50}
      >
        <Heading
          fontSize={["3rem", null, "4rem"]}
          className="f-abril hover-effect"
        >
          Articles
        </Heading>
        <VStack spacing={20} divider={<Divider />}>
          {ArticleData.map((el) => (
            <Article {...el} />
          ))}
        </VStack>
      </VStack>
      <Scrollbar />
      <CreateArticle />
      <SearchArticle />
    </>
  );
}

export default Articles;
