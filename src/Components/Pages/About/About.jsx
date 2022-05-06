import { HStack, VStack, Image, Text, Heading, Box } from "@chakra-ui/react";
import aboutImg from "../../../Assets/About/about.jpg";
import aboutVideo from "../../../Assets/About/s-bg-video.mp4";
function About() {
  return (
    <VStack
      w="100%"
      h="100vh"
      overflowY="scroll"
      className="pageLoadAnimation scrollStatus"
      justifyContent="center"
    >
      <HStack spacing={5}>
        <Heading className="f-abril" fontSize={["4xl", "4xl", "9xl"]}>
          Kagi
        </Heading>
        {/* <Image
          className="hover-effect"
          transform={["translateY(-40%)", "translateY(-35%)"]}
          width={["260px", "350px", "500px"]}
          src={aboutImg}
          borderRadius={9}
          boxShadow={"lg"}
        /> */}
        <Box
          className="hover-effect"
          width={["260px", "350px", "500px"]}
          overflow="hidden"
          borderRadius={9}
          transform={["translateY(-40%)", "translateY(-30%)"]}
          boxShadow={"lg"}
        >
          <video
            className="aboutVideo hover-effect"
            src={aboutVideo}
            autoPlay
            loop
          ></video>
        </Box>
      </HStack>
      <Box className="hideText" bg={"white"}></Box>
      <Text fontSize="40px" className="hover-effect f-ssp infiniteText">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum
        explicabo dolores enim quia, animi voluptates temporibus incidunt fugiat
        ea quidem. Ipsum aspernatur provident, voluptatibus quisquam fuga
        expedita reiciendis. Suscipit, sapiente? Asperiores iure perferendis
        laborum reprehenderit. Mollitia perspiciatis alias suscipit adipisci!
        Doloremque, vitae eius unde fugiat, ea impedit commodi recusandae eum
        autem eos, incidunt inventore sapiente animi laborum aut omnis nisi?
      </Text>
    </VStack>
  );
}

export default About;
