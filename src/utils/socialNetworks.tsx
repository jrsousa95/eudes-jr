import { Box } from "@chakra-ui/react";

interface SocialNetworksProps {
  children: React.ReactNode;
}

export function SocialNetworks({ children }: SocialNetworksProps) {
  return (
    <Box
      display="flex"
      padding="20.671px 24.806px"
      justifyContent="center"
      alignItems="center"
      gap="8.269px"
      borderRadius="8.269px"
      background="#F2F7FC"
    >
      {children}
    </Box>
  );
}
