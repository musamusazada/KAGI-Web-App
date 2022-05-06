import React from "react";
import { VStack, Grid, GridItem, Text, Heading } from "@chakra-ui/react";
import Course from "./Course";
import courseImg from "../../../Assets/Courses/course1.webp";
import CreateCourse from "./CreateCourse";

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
];

function CourseManagement() {
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
        <Heading className="f-abril " fontSize={["2xl", "3xl", "7xl"]}>
          My Courses
        </Heading>
        <Grid
          templateColumns={["repeat(1,1fr)", "repeat(2,1fr)", "repeat(3,1fr)"]}
          gap="40px"
        >
          {DUMMY_DATA.map((el) => {
            return (
              <GridItem key={el.id}>
                <Course {...el} />
              </GridItem>
            );
          })}
        </Grid>
      </VStack>
      <CreateCourse />
    </>
  );
}

export default CourseManagement;
