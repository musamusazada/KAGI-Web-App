import React from "react";
import { Button } from "@chakra-ui/react";
import { signInWithPopup } from "firebase/auth";

function SignIn({ auth, provider }) {
  const handleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  };
  return (
    <Button
      bg={"transparent"}
      transform="rotate(-90deg)"
      _focus="none"
      border={"2px"}
      borderColor="black"
      onClick={handleSignIn}
    >
      Sign In
    </Button>
  );
}

export default SignIn;
