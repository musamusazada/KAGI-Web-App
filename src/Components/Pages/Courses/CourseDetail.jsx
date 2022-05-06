import React from "react";
import {
  Box,
  VStack,
  HStack,
  Image,
  Heading,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Divider,
  Button,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import Comment from "../../UI/Comment/Comment";
import ListItem from "../../UI/ListItem/ListItem";
import courseCover from "../../../Assets/Courses/course-cover.webp";

const DUMMY_DATA = {
  comments: [
    {
      content: "This course is AWESOME!",
      author: "Jerome Nitsche",
      src: "https://images.pexels.com/photos/4065187/pexels-photo-4065187.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      id: "1",
    },
    {
      content: "Totally love it",
      author: "Nastya",
      src: "https://images.pexels.com/photos/4065187/pexels-photo-4065187.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      id: "2",
    },
    {
      content: "This is my new hobby",
      author: "Berist",
      src: "https://images.pexels.com/photos/4065187/pexels-photo-4065187.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      id: "3",
    },
    {
      content: "Hello Im under the water",
      author: "Habibi",
      src: "https://images.pexels.com/photos/4065187/pexels-photo-4065187.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      id: "4",
    },
    {
      content: "This course is AWESOME!",
      author: "Jerome Nitsche",
      src: "https://images.pexels.com/photos/4065187/pexels-photo-4065187.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      id: "5",
    },
  ],
  description: "This course is ment for anybody",
  points: [
    "Learn Basics",
    "Lorem Doler Der",
    "Drummen Derr",
    "Ehdrk SIcuyyen Louiorseff YChebgefy PYhdes",
    "Dyyye Ouilllo Profille",
    "Onulle Iuder Sille",
  ],
};

function CourseDetail() {
  return (
    <VStack
      className="pageLoadAnimation scrollStatus"
      spacing={50}
      w="100%"
      h="100vh"
      overflowY="scroll"
      padding={50}
    >
      <Box width="100%" h="450px">
        <Image className="hover-effect" w="100%" h="100%" src={courseCover} />
      </Box>
      <HStack width="100%" justifyContent="space-between" alignItems="center">
        <Heading
          alignSelf="start"
          className="f-ssp"
          fontSize={30}
          marginBottom="20px"
        >
          Ultimate Pottery Artistry by Niam Willhenberg
        </Heading>
        <Button
          className="hover-effect f-ssp"
          _focus={"none"}
          _hover={{ backgroundColor: "#000", color: "#fff" }}
          variant="outline"
        >
          Enroll now
        </Button>
      </HStack>
      <Tabs variant="enclosed" width="100%">
        <TabList>
          <Tab _focus={"none"}>Description</Tab>
          <Tab _focus={"none"}>Comments</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Grid templateColumns="repeat(2,1fr)">
              <GridItem>
                <Text className="hover-effect f-ssp" fontSize={22}>
                  {DUMMY_DATA.description}
                </Text>
              </GridItem>
              <GridItem>
                {DUMMY_DATA.points.map((el) => (
                  <ListItem content={el} />
                ))}
              </GridItem>
            </Grid>
          </TabPanel>
          <TabPanel>
            {DUMMY_DATA.comments.map((el) => (
              <Box
                className="hover-effect"
                marginBottom="18px"
                padding={4}
                _hover={{ backgroundColor: "lightgray" }}
              >
                <Comment {...el} />
                <Divider />
              </Box>
            ))}
          </TabPanel>
        </TabPanels>
      </Tabs>
    </VStack>
  );
}

export default CourseDetail;
