import { useState } from "react";
import { HStack, Spacer, Stack, Circle, Text, Link } from "@chakra-ui/react";
import {
  HiOutlineArrowNarrowRight,
  HiOutlineArrowNarrowLeft,
} from "react-icons/hi";
import SliderItem from "./SliderItem";
import sliderImage1 from "../../../Assets/Slider/slider_1.jpeg";
import sliderImage2 from "../../../Assets/Slider/slider_2.jpeg";
import sliderImage3 from "../../../Assets/Slider/slider_3.jpeg";
import sliderImage4 from "../../../Assets/Slider/slider_4.jpg";
import sliderImage5 from "../../../Assets/Slider/slider_5.jpeg";
import sliderImage6 from "../../../Assets/Slider/slider_6.jpg";

const SliderData = [
  {
    id: 1,
    image: sliderImage1,
    text: "Light is in the darkest places",
    color: "#fff",
    title: "Explore Courses",
  },
  {
    id: 2,
    image: sliderImage2,
    text: "Free your mind",
    color: "#fff",
    title: "Motivation",
  },
  {
    id: 3,
    image: sliderImage3,
    text: "Let knowledge surround you",
    color: "#fff",
    title: "Articles",
  },

  {
    id: 5,
    image: sliderImage5,
    text: "Your best digital friend",
    color: "#fff",
    title: "About",
  },
  {
    id: 6,
    image: sliderImage6,
    text: "Explore now",
    color: "#fff",
    title: "Account",
  },
];
function Slider() {
  const [active, setActive] = useState(1);
  const length = SliderData.length;

  const nextSlide = () => {
    setActive(active === length ? 1 : active + 1);
  };

  const prevSlide = () => {
    setActive(active === 1 ? length : active - 1);
  };

  return (
    <Stack direction="column" w="100%" h="100%">
      <HStack flexWrap="wrap" justifyContent="center" spacing={4}>
        {SliderData.map((el) => (
          <Link
            key={el.id}
            onClick={() => setActive(el.id)}
            className="f-ssp hover-effect"
            fontSize="xl"
            color="white"
          >
            {el.title}
          </Link>
        ))}
      </HStack>
      <Stack
        w="100%"
        h="100%"
        justifyContent="center"
        alignItems="center"
        flexWrap="nowrap"
        position="relative"
      >
        {SliderData.map((el) => {
          if (el.id === active) {
            return (
              <SliderItem
                key={el.id}
                image={el.image}
                text={el.text}
                color={el.color}
                isActive={true}
              />
            );
          } else {
            return (
              <SliderItem
                key={el.id}
                color={el.color}
                image={el.image}
                text={el.text}
                isActive={false}
              />
            );
          }
        })}
      </Stack>
      <HStack>
        <Stack>
          <Text className="f-ssp" fontSize="3xl" color="white">
            {active} / {length}
          </Text>
        </Stack>
        <Spacer />
        <Stack justifyContent="right" direction="row" spacing={3}>
          <Circle
            onClick={prevSlide}
            className="f-ssp"
            fontWeight="600"
            bg="#fff"
            size="60px"
          >
            <HiOutlineArrowNarrowLeft color="black" fontSize="30px" />
          </Circle>
          <Circle
            onClick={nextSlide}
            className="f-ssp"
            fontWeight="600"
            bg="#fff"
            size="60px"
          >
            <HiOutlineArrowNarrowRight color="black" fontSize="30px" />
          </Circle>
        </Stack>
      </HStack>
    </Stack>
  );
}

export default Slider;
