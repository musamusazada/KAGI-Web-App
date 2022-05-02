import React from "react";
import { Box, Switch, Stack, useColorMode } from "@chakra-ui/react";
import { BsSun, BsMoon } from "react-icons/bs";
function ColorToggle() {
  const { toggleColorMode } = useColorMode();
  return (
    <Stack
      direction={["row", "column"]}
      justify="center"
      align="center"
      spacing="20px"
    >
      <BsSun size={22} color="gray" />
      <Switch
        onChange={toggleColorMode}
        transform={["rotate(0)", "rotate(90deg)"]}
        size="lg"
        border="none"
      />
      <BsMoon />
    </Stack>
  );
}

export default ColorToggle;
