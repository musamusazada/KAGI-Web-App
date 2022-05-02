import { useState } from "react";
import { Stack, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import ColorToggle from "./ColorToggle";
import Logo from "../../../Assets/logowo.png";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import NavigationLinks from "./NavigationLinks";
import Sidebar from "./Sidebar/Sidebar";
function Navbar() {
  const [sidebarActive, setSidebarActive] = useState(false);
  const toggleSidebar = () => setSidebarActive(!sidebarActive);

  return (
    <nav>
      <Stack
        h="100%"
        justify="space-between"
        align="center"
        width={{ base: "100%", md: "70px" }}
        direction={{ base: "row", md: "column" }}
        padding="10px 4px"
        borderBottom={["1ps solid black", null]}
        borderRight={[null, "1px solid lightgray"]}
      >
        <Stack direction={["row", "column"]} spacing={5}>
          <Link to={"/"}>
            <Box width="120px">
              <img src={Logo} alt="Kagi Logo" />
            </Box>
          </Link>
          <ColorToggle />
        </Stack>
        <HiOutlineMenuAlt1
          className="hover-effect"
          onClick={toggleSidebar}
          size={30}
          width="100%"
          cursor="pointer"
        />
        <NavigationLinks />
        <Sidebar sidebarStatus={sidebarActive} closeSidebar={toggleSidebar} />
      </Stack>
    </nav>
  );
}

export default Navbar;
