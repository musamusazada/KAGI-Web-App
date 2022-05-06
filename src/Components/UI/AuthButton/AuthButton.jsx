import { auth } from "../../../firebase-config";
import { GoogleAuthProvider } from "firebase/auth";
import { useEffect, useState } from "react";
import SignIn from "./SignIn";
import SingOut from "./SingOut";

const provider = new GoogleAuthProvider();

function AuthButton() {
  const [user, setUser] = useState(() => auth.currentUser);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      user ? setUser(user) : setUser(null);
    });

    return unsubscribe;
  });
  return (
    <>
      {!user ? (
        <SignIn auth={auth} provider={provider} />
      ) : (
        <SingOut auth={auth} />
      )}
    </>
  );
}

export default AuthButton;
