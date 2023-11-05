import { Stack, Text } from "@chakra-ui/react";

interface SocialNetworksProps {
  children: React.ReactNode;
  label: string;
  value: string;
}

export function Infos({ children, label, value }: SocialNetworksProps) {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="flex-start"
      spacing="10px"
      margin="33px 46px 0 46px"
    >
      {children}

      <Stack spacing={0} fontSize="14px">
        <Text>{label}</Text>
        <Text>{value}</Text>
      </Stack>
    </Stack>
  );
}
