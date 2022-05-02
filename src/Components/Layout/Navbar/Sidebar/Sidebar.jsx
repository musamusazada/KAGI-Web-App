import { Box, VStack, Link as CharkaLink } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import classes from "./Sidebar.module.css";
import { AiOutlineClose } from "react-icons/ai";

function Sidebar(props) {
  const _themeColor = localStorage.getItem("chakra-ui-color-mode");
  const bgVal = _themeColor === "light" ? "white" : "#1A202C";
  const colorVal = _themeColor === "light" ? "black" : "white";
  return (
    <VStack
      zIndex={9999}
      opacity="1"
      backgroundColor={bgVal}
      boxShadow={"md"}
      className={classes.sidebarWrapper + " " + "hover-effect"}
      left={[
        props.sidebarStatus ? "129px" : "100%",
        props.sidebarStatus ? "70px" : "-100%",
      ]}
    >
      <Link to={"/"}>
        <CharkaLink
          color={colorVal}
          fontSize={["2xl", "3xl"]}
          fontFamily={"'Source Serif Pro', serif;'"}
          className="hover-effect"
        >
          Home
        </CharkaLink>
      </Link>
      <Link to="/courses">
        <CharkaLink
          className="hover-effect"
          color={colorVal}
          fontSize={["2xl", "3xl"]}
          fontFamily={"'Source Serif Pro', serif;'"}
        >
          Courses
        </CharkaLink>
      </Link>
      <CharkaLink
        className="hover-effect"
        color={colorVal}
        fontSize={["2xl", "3xl"]}
        fontFamily={"'Source Serif Pro', serif;'"}
      >
        Motivation
      </CharkaLink>
      <Link to={"/articles"}>
        <CharkaLink
          className="hover-effect"
          color={colorVal}
          fontSize={["2xl", "3xl"]}
          fontFamily={"'Source Serif Pro', serif;'"}
        >
          Articles
        </CharkaLink>
      </Link>
      <Link to="/about">
        <CharkaLink
          className="hover-effect"
          color={colorVal}
          fontSize={["2xl", "3xl"]}
          fontFamily={"'Source Serif Pro', serif;'"}
        >
          About
        </CharkaLink>
      </Link>

      <Box onClick={props.closeSidebar} position="absolute" top={10} right={10}>
        <AiOutlineClose color={colorVal} size={30} />
      </Box>
    </VStack>
  );
}

export default Sidebar;
