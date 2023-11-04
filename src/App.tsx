import { Box, Button, Heading, Stack, useColorMode } from "@chakra-ui/react";
import { Profile } from "./components/profile";
import { colorModeIcon } from "./utils/colorModeIcon";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box margin="50px 100px">
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        marginBottom="42px"
      >
        <Heading fontSize="24px" fontWeight="400">
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
