import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@chakra-ui/react";
import { RiAccountCircleLine } from "react-icons/ri";
import { BsBoxSeam, BsBookmarkHeart } from "react-icons/bs";
import { RiArticleLine } from "react-icons/ri";
function NavigationLinks() {
  return (
    <Stack
      spacing={4}
      direction={["row", "column"]}
      display={["none", "flex"]}
      justify={"center"}
      align={"center"}
    >
      <BsBoxSeam size={20} />
      <BsBookmarkHeart size={20} />
      <Link to="/articles">
        <RiArticleLine size={21} />
      </Link>
      <RiAccountCircleLine size={23} />
    </Stack>
  );
}

export default NavigationLinks;
