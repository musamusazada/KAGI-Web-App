import "./reset.css";
import "./index.css";
import { ChakraProvider, Stack } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cursor from "./Components/UI/Cursor/Cursor";
import Navbar from "./Components/Layout/Navbar/Navbar";
import Landing from "./Components/Pages/Landing/Landing";
import Articles from "./Components/Pages/Articles/Articles";
import Error from "./Components/Pages/Error/Error";
import ArticleDetail from "./Components/Pages/Articles/Article/ArticleDetail";
import About from "./Components/Pages/About/About";
import Courses from "./Components/Pages/Courses/Courses";
import CourseDetail from "./Components/Pages/Courses/CourseDetail";
import Account from "./Components/Pages/Account/Account";
import CourseManagement from "./Components/Pages/CourseManagement/CourseManagement";
import CourseStream from "./Components/Pages/CourseManagement/CourseStream";
import LiveChat from "./Components/Pages/LiveChat/LiveChat";
import Motivation from "./Components/Pages/Motivation/Motivation";

function App() {
  return (
    <BrowserRouter>
      <ChakraProvider>
        <Cursor />
        <Stack
          className="App"
          height="100vh"
          direction={{ base: "column", md: "row" }}
        >
          <Navbar />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/livechat" element={<LiveChat />} />
            <Route
              path="/courses/course/:courseDetail"
              element={<CourseDetail />}
              exact
            />
            <Route path="/articles" element={<Articles />} />
            <Route path="/motivation" element={<Motivation />} />
            <Route
              path="/articles/article/:articleDetail"
              element={<ArticleDetail />}
              exact
            />
            <Route path="/mycourses" element={<CourseManagement />} />
            <Route path="/coursestream/:courseId" element={<CourseStream />} />
            <Route path="/account" element={<Account />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Stack>
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
