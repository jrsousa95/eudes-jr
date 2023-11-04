import { MoonIcon, SunIcon } from "@chakra-ui/icons";

export function colorModeIcon(colorMode: string) {
  if (colorMode === "light") {
    return <SunIcon />;
  }
  return <MoonIcon />;
}
