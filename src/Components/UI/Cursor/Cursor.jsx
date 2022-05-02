import classes from "./Cursor.module.css";
import { Box, useColorModeValue } from "@chakra-ui/react";
import React, { useRef, useEffect } from "react";
function Cursor() {
  const cursorRef = useRef(null);
  const colorVal = useColorModeValue("1px solid black", "1px solid white");
  useEffect(() => {
    document.addEventListener("mousemove", function (event) {
      const { clientX, clientY } = event;
      const mouseX = clientX - cursorRef.current.clientWidth / 2;
      const mouseY = clientY - cursorRef.current.clientHeight / 2;
      if (
        document
          .elementFromPoint(clientX, clientY)
          .classList.contains("hover-effect")
      ) {
        cursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px ,0) scale(3)`;
      } else {
        cursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px ,0) `;
      }
    });
  }, []);
  return (
    <Box
      border={colorVal}
      className={classes.customCursor}
      ref={cursorRef}
    ></Box>
  );
}

export default React.memo(Cursor);
