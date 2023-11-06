import {
  Box,
  Button,
  Heading,
  Stack,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { AiOutlineHome } from "react-icons/ai";
import { RiContactsBookLine } from "react-icons/ri";
import { BsJournalText, BsPersonWorkspace } from "react-icons/bs";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LinkPages } from "./components/linkPages";
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
  const bgLinks = useColorModeValue("rgba(0, 0, 0, 0.25)", "#2D3748");

  return (
    <Box padding="50px 100px" width="full" bg={bg}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        marginBottom="15px"
      >
        <Heading fontSize="32px" fontFamily="Brush Script MT" fontWeight="400">
          Eudes Junior
        </Heading>
        <Button onClick={toggleColorMode}>{colorModeIcon(colorMode)}</Button>
      </Stack>

      <Box display="flex" gap="30px">
        <Profile />

        <Box width="full">
          <BrowserRouter>
            <Stack direction="row" justifyContent="flex-end">
              <Box
                display="flex"
                gap="40px"
                borderRadius="20px"
                padding="10px 30px"
                bg={bgPages}
                boxShadow={`0px 0px 0px 0.25px ${bgLinks}`}
              >
                <LinkPages label="home" path="/">
                  <AiOutlineHome fontSize="20px" />
                </LinkPages>
                <LinkPages label="resume" path="/resume">
                  <BsJournalText fontSize="20px" />
                </LinkPages>
                <LinkPages label="work" path="/work">
                  <BsPersonWorkspace fontSize="20px" />
                </LinkPages>
                <LinkPages label="contact" path="/contact">
                  <RiContactsBookLine fontSize="20px" />
                </LinkPages>
              </Box>
            </Stack>

            <Box
              margin="23px 0px"
              padding="20px 50px"
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
        </Box>
      </Box>
    </Box>
  );
}

export default App;
