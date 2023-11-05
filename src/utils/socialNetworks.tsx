import { Box, useColorModeValue } from "@chakra-ui/react";

interface SocialNetworksProps {
  children: React.ReactNode;
}

export function SocialNetworksBox({ children }: SocialNetworksProps) {
  const bg = useColorModeValue("#F2F7FC", "#1A202C");

  return (
    <Box
      display="flex"
      padding="20.671px 24.806px"
      justifyContent="center"
      alignItems="center"
      gap="8.269px"
      borderRadius="8.269px"
      background={bg}
    >
      {children}
    </Box>
  );
}
