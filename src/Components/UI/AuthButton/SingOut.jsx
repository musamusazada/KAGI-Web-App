import React from "react";
import { Button } from "@chakra-ui/react";
import { signOut } from "firebase/auth";

function SingOut({ auth }) {
  const handleSignOut = () => {
    signOut(auth)
      .then(() => console.log("Signed Out"))
      .catch(() => console.log("Error Occured"));
  };
  return (
    <Button
      bg={"transparent"}
      transform="rotate(-90deg)"
      _focus="none"
      border={"2px"}
      borderColor="black"
      onClick={handleSignOut}
    >
      Sing Out
    </Button>
  );
}

export default SingOut;
