import {
  Box,
  Button,
  Heading,
  Stack,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavBar } from "./components/navbar";
import { Profile } from "./components/profile";
import { Contact } from "./pages/contact";
import { Home } from "./pages/home";
import { Resume } from "./pages/resume";
import { Work } from "./pages/work";
import { colorModeIcon } from "./utils/colorModeIcon";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("#F2F7FC", "#1A202C");
  const bgPages = useColorModeValue("#FFF", "#2D3748");
  // const bgLinks = useColorModeValue("rgba(0, 0, 0, 0.25)", "#2D3748");

  return (
    <Box
      padding={{ base: "50px 15px", md: "50px 100px", lg: "50px 100px" }}
      width="full"
      bg={bg}
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        marginBottom="50px"
      >
        <Heading fontSize="32px" fontFamily="Brush Script MT" fontWeight="400">
          Eudes Junior
        </Heading>
        <Button onClick={toggleColorMode}>{colorModeIcon(colorMode)}</Button>
      </Box>

      <Stack direction={{ base: "column", md: "row", lg: "row" }} gap="30px">
        <Profile />

        <Stack
          width="full"
          gap={{ base: "30px", md: "60px", lg: "60px" }}
          alignItems="flex-end"
        >
          <BrowserRouter>
            <NavBar />

            <Box
              width="full"
              padding={{ base: "10px 15px", md: "20px 50px", lg: "20px 50px" }}
              borderRadius="20px"
              boxShadow="0px 0px 4px 0px rgba(0, 0, 0, 0.25)"
              bg={bgPages}
            >
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/work" element={<Work />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </Box>
          </BrowserRouter>
        </Stack>
      </Stack>
    </Box>
  );
}

export default App;
