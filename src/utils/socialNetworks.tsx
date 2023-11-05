import { Box, useColorModeValue } from "@chakra-ui/react";

interface SocialNetworksProps {
  children: React.ReactNode;
}

export function SocialNetworksBox({ children }: SocialNetworksProps) {
  const bg = useColorModeValue("#F2F7FC", "#1A202C");
  const hoverBg = useColorModeValue("#DCE8FF", "#718096");

  return (
    <Box
      display="flex"
      padding="20.671px 24.806px"
      justifyContent="center"
      alignItems="center"
      borderRadius="8.269px"
      background={bg}
      transition="background 0.3s ease-in-out"
      _hover={{ background: hoverBg }}
    >
      {children}
    </Box>
  );
}
