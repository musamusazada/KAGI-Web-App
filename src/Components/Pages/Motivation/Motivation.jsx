import { useState, useEffect } from "react";
import {
  VStack,
  Input,
  Box,
  Button,
  HStack,
  Spinner,
  Text,
} from "@chakra-ui/react";
import mbg from "../../../Assets/Motivation/motivation_bg.jpg";
import { BiSearchAlt } from "react-icons/bi";

import OpenAI from "openai-api";

const _openAI = new OpenAI("YOUR_API_KEY");

function Motivation() {
  const [color, setColor] = useState("black");
  const [loading, setLoading] = useState(false);
  const [aiResult, setAiResult] = useState("");

  const submitHandler = (e) => {
    setLoading(true);
    setAiResult("");
    e.preventDefault();
    if (e.target[0].value.trim() !== "") {
      openAIRequest(e.target[0].value);
      e.target[0].value = "";
    }
  };
  const requestHandler = (data) => {
    setLoading(false);
    setAiResult(data.choices[0].text);
  };
  const openAIRequest = async (userPrompt) => {
    const gptResponse = await _openAI.complete({
      engine: "text-davinci-002",
      prompt: userPrompt,
      maxTokens: 256,
      temperature: 1,
      topP: 1,
      presencePenalty: 0,
      frequencyPenalty: 0,
    });

    requestHandler(gptResponse.data);
  };
  useEffect(() => {});

  return (
    <Box
      width="100%"
      h="100vh"
      backgroundImage={mbg}
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
    >
      <VStack
        justifyContent={"center"}
        className="pageLoadAnimation"
        spacing="10"
        w="100%"
        h="100vh"
        padding={50}
      >
        <form className="pushBottom" onSubmit={submitHandler}>
          <HStack position="relative">
            <Input
              className="white--placeholder f-abril ai-search hover-effect"
              width={["300px", "500px", "600px"]}
              placeholder="Ask Kagi..."
              border={"none"}
              borderBottom="2px"
              focusBorderColor="white"
              fontSize="2xl"
              padding="3"
              onFocus={() => setColor("#fff")}
              onBlur={() => setColor("#000")}
              onMouseEnter={() => setColor("#fff")}
              onMouseLeave={() => setColor("#000")}
            />
            <Button
              classname="hover-effect"
              bg="transparent"
              _focus={"none"}
              fontSize="4xl"
              position="absolute"
              right="-10px"
              _hover={{ backgroundColor: "transparent" }}
            >
              <BiSearchAlt color={color} />
            </Button>
            {loading ? (
              <Spinner
                size="lg"
                color={color}
                position="absolute"
                top="70px"
                left="50%"
                transform="translateX(-50%)"
              />
            ) : (
              ""
            )}
          </HStack>
        </form>
        {aiResult != "" ? (
          <Text
            bg={"whiteAlpha.800"}
            color="black"
            padding="10"
            boxShadow={"lg"}
            borderRadius={"3xl"}
            className="pageLoadAnimation f-ssp hover-effect"
            fontSize={"3xl"}
            marginTop="20px"
          >
            {aiResult}
          </Text>
        ) : (
          ""
        )}
      </VStack>
    </Box>
  );
}

export default Motivation;
