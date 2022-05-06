import {
  Center,
  VStack,
  HStack,
  Text,
  Heading,
  Avatar,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { ImNewspaper } from "react-icons/im";
import { GoPackage } from "react-icons/go";
import UserInfo from "./UserInfo";
import accountBG from "../../../Assets/Account/account-bg.mp4";

const User_Data = {
  articles: [
    { id: 1, title: "Ich Bin Seeen" },
    { id: 2, title: "Thank you Jeffrey" },
  ],
  courses: [
    { id: 3, title: "Learn React" },
    { id: 4, title: "Pottery 101" },
  ],
};

function Account() {
  return (
    <>
      <Center
        className="pageLoadAnimation scrollStatus"
        spacing={50}
        w="100%"
        h="100vh"
        position="relative"
      >
        <video
          className="account-bg-video"
          src={accountBG}
          autoPlay
          loop
        ></video>
        <VStack
          boxShadow="2xl"
          padding={20}
          borderRadius={"3xl"}
          spacing={10}
          bg="whiteAlpha.700"
        >
          <HStack spacing={8}>
            <Avatar
              className="hover-effect"
              size="2xl"
              src="https://images.pexels.com/photos/4065187/pexels-photo-4065187.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
            <VStack>
              <Heading className="hover-effect f-ssp">Kristina Anna</Heading>
              <Text
                className="hover-effect f-ssp"
                alignSelf="start"
                fontSize={20}
                fontWeight={500}
              >
                @kanna
              </Text>
            </VStack>
          </HStack>
          <Tabs isFitted variant="enclosed" width="100%">
            <TabList mb="1em">
              <Tab _focus={"none"}>Account</Tab>
              <Tab _focus={"none"}>Articles</Tab>
              <Tab _focus={"none"}>Courses</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <FormControl mb={4}>
                  <FormLabel htmlFor="title">Fullname</FormLabel>
                  <Input focusBorderColor="black" id="title" type="text" />
                </FormControl>
                <FormControl mb={4}>
                  <FormLabel htmlFor="title">Username</FormLabel>
                  <Input focusBorderColor="black" id="title" type="text" />
                </FormControl>
                <FormControl mb={4}>
                  <FormLabel htmlFor="title">Password</FormLabel>
                  <Input focusBorderColor="black" id="title" type="password" />
                </FormControl>
              </TabPanel>
              <TabPanel>
                <VStack alignItems="start">
                  {User_Data.articles.map((el) => (
                    <UserInfo
                      key={el.id}
                      icon={<ImNewspaper />}
                      title={el.title}
                    />
                  ))}
                </VStack>
              </TabPanel>
              <TabPanel>
                <VStack alignItems="start">
                  {User_Data.courses.map((el) => (
                    <UserInfo
                      key={el.id}
                      icon={<GoPackage />}
                      title={el.title}
                    />
                  ))}
                </VStack>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </VStack>
      </Center>
    </>
  );
}

export default Account;
