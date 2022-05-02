import { Center, Flex } from "@chakra-ui/react";
import React from "react";
import LandingBG from "../../../Assets/Landing/landing_bg.jpg";
import Slider from "./Slider";
function Landing() {
  return (
    <Center className="pageLoadAnimation" w="100%" h="100vh" padding={50}>
      <Center
        borderRadius={10}
        backgroundImage={LandingBG}
        h="80vh"
        w="80vw"
        padding={30}
      >
        <Slider />
      </Center>
    </Center>
  );
}

export default Landing;
