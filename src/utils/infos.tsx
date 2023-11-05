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
      spacing="30px"
      margin="33px 46px 0 46px"
    >
      {children}

      <Stack spacing={0} fontSize="14px">
        <Text fontSize="16px" fontWeight={600}>
          {label}
        </Text>
        <Text fontSize="14px" fontWeight={500}>
          {value}
        </Text>
      </Stack>
    </Stack>
  );
}
