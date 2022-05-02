import React from "react";
import { Grid, GridItem, Heading, Input, VStack } from "@chakra-ui/react";
import Scrollbar from "../../UI/ScrollBar/Scrollbar";
import courseImg from "../../../Assets/Courses/course1.webp";
import Course from "./Course";
import patterBG from "../../../Assets/wave.png";
const DUMMY_DATA = [
  {
    id: 1,
    image: courseImg,
    title: "Lets learn now",
    author: "Jerome Nielson",
  },
  {
    id: 2,
    image: courseImg,
    title: "Ultimate Node JS",
    author: "Jerome Nielson",
  },
  {
    id: 3,
    image: courseImg,
    title: "React Bootcamp",
    author: "Jerome Nielson",
  },
  {
    id: 4,
    image: courseImg,
    title: "Hi Darling",
    author: "Jerome Nielson",
  },
  {
    id: 5,
    image: courseImg,
    title: "Gardening",
    author: "Jerome Nielson",
  },
  {
    id: 6,
    image: courseImg,
    title: "Lets learn now",
    author: "Jerome Nielson",
  },
  {
    id: 7,
    image: courseImg,
    title: "Lets learn now",
    author: "Jerome Nielson",
  },
];

function Courses() {
  return (
    <VStack
      backgroundImage={patterBG}
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      paddingTop="20"
      paddingBottom="10"
      className="pageLoadAnimation scrollStatus"
      w="100%"
      h="100vh"
      alignItems="center"
      overflowY="scroll"
      spacing="40"
    >
      <Heading fontSize={["3xl", "4xl", "5xl"]} className="f-ssp">
        Courses
      </Heading>
      <Input
        width={["90%", "300px"]}
        fontSize="2xl"
        focusBorderColor="black"
        padding={"3"}
        placeholder="Search (0_0)"
      />
      <Grid
        gap="32"
        gridTemplateColumns={[
          "repeat(1,1fr)",
          "repeat(1,1fr)",
          "repeat(2,1fr)",
        ]}
      >
        {DUMMY_DATA.map((el) => {
          return (
            <GridItem className="onAirEffect" key={el.id}>
              <Course {...el} />
            </GridItem>
          );
        })}
      </Grid>
      <Scrollbar />
    </VStack>
  );
}

export default Courses;
