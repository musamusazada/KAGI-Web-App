import React from "react";
import { Text, Center } from "@chakra-ui/react";
import classes from "./SliderItem.module.css";
function SliderItem(props) {
  const elClassGen = props.isActive ? classes.slideActive : classes.slide;
  return (
    <Center
      borderRadius={15}
      className={"hover-effect" + " " + elClassGen}
      w={["100%", null, "90%"]}
      height={["90%", null, "80%"]}
      bgImage={props.image}
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      backgroundPosition="center"
    >
      <Text
        className="hover-effect f-ssp"
        textAlign="center"
        color={props.color}
        fontSize={[30, null, 60]}
      >
        {props.text}
      </Text>
    </Center>
  );
}

export default SliderItem;
