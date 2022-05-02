import React from "react";
import { Center } from "@chakra-ui/react";
import { ImFacebook, ImTwitter, ImLinkedin2, ImSad } from "react-icons/im";

const SOCIAL_MEDIA_URLS = {
  facebook: "https://www.facebook.com/sharer.php?u=",
  twitter: "https://twitter.com/share?url=",
  linkedin: "https://www.linkedin.com/shareArticle?url=",
};

function SocialButton(props) {
  const pageUrl = window.location.href;
  let url;
  let iconEl;
  const handleClick = () => {
    switch (props.media) {
      case "facebook":
        url = SOCIAL_MEDIA_URLS.facebook + pageUrl.pathname;
        window.open(url, "_blank").focus();
        break;
      case "twitter":
        url = SOCIAL_MEDIA_URLS.twitter + pageUrl.pathname;
        window.open(url, "_blank").focus();
        break;
      case "linkedin":
        url = SOCIAL_MEDIA_URLS.linkedin + pageUrl.pathname;
        window.open(url, "_blank").focus();
        break;
      default:
        break;
    }
  };

  switch (props.media) {
    case "facebook":
      iconEl = <ImFacebook />;
      break;
    case "twitter":
      iconEl = <ImTwitter />;
      break;
    case "linkedin":
      iconEl = <ImLinkedin2 />;
      break;
    default:
      iconEl = <ImSad />;
      break;
  }

  return (
    <Center
      borderRadius={50}
      width="30px"
      height="30px"
      border={"2px"}
      onClick={handleClick}
      transition=".3s"
      _hover={{ transform: "scale(1.3)" }}
    >
      {iconEl}
    </Center>
  );
}

export default SocialButton;
