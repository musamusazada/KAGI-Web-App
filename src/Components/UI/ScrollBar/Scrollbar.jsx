import { useState, useLayoutEffect } from "react";
import { Text } from "@chakra-ui/react";
function Scrollbar() {
  const [scrollStatus, setScrollStatus] = useState(0);
  let content;
  useLayoutEffect(() => {
    document
      .querySelector(".scrollStatus")
      .addEventListener("scroll", function (e) {
        const percentage = (e.target.scrollTop / e.target.scrollTopMax) * 100;

        setScrollStatus(percentage.toFixed(0));
      });
  }, []);
  if (typeof scrollStatus != "NaN") {
    content = scrollStatus + "%";
  } else {
    content = "";
  }
  return (
    <Text
      position="fixed"
      right={["5px", "50px", "90px", "150px"]}
      top="50%"
      className="f-abril hover-effect"
      fontSize={["md", "xl", "2xl"]}
    >
      {content}
    </Text>
  );
}

export default Scrollbar;
