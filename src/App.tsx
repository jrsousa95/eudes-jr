import {
  Box,
  Button,
  Heading,
  Stack,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { Profile } from "./components/profile";
import { colorModeIcon } from "./utils/colorModeIcon";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("#F2F7FC", "#1A202C");

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

      <Box display="flex">
        <Profile />
      </Box>
    </Box>
  );
}

export default App;
