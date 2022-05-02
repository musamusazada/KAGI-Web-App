import React, { useEffect } from "react";
import { Center, Image, Text } from "@chakra-ui/react";
import ErrorBG from "../../../Assets/error-page-bg.jpeg";

function Error() {
  return (
    <Center className="hover-effect" width="100%" height="100vh">
      <Image
        position="relatative"
        className="hover-effect image-distortion"
        rounded={40}
        src={ErrorBG}
      />
      <Text
        width={(["90%"], null)}
        className="hover-effect f-ssp"
        position="absolute"
        top={["60%", "50%"]}
        left="50%"
        transform="translate(-50%,-50%)"
        color="whitesmoke"
        fontSize={[30, 40, 70]}
        fontWeight="800"
        borderBottom="4px solid black"
      >
        Seems like you are lost...
      </Text>
    </Center>
  );
}

export default Error;
