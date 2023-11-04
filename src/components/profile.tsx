import { Box, Card, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { BsInstagram } from "react-icons/bs";
import { SocialNetworks } from "../utils/socialNetworks";

export function Profile() {
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Image
        boxSize="200px"
        borderRadius="20px"
        background="url(<path-to-image>), lightgray 50% / cover no-repeat"
        boxShadow="0px 0px 4px 0px rgba(0, 0, 0, 0.25)"
        flexShrink="0"
        objectFit="cover"
        position="absolute"
        zIndex={99}
        src="https://avatars.githubusercontent.com/u/82784385?v=4"
        alt="Eudes Junior"
      />

      <Card
        width="400px"
        flexShrink="0"
        borderRadius="20px"
        boxShadow="0px 0px 4px 0px rgba(0, 0, 0, 0.25)"
        display="flex"
        flexDirection="column"
        alignItems="center"
        marginTop="100px"
      >
        <Heading
          fontFamily="Raleway"
          fontSize="28.42px"
          fontStyle="normal"
          fontWeight="700"
          lineHeight="35.525px"
          marginTop="120px"
        >
          Eudes Júnior
        </Heading>

        <Text
          fontFamily="Raleway"
          fontSize="16px"
          fontStyle="normal"
          fontWeight="500"
          lineHeight="40px"
        >
          FullStack Developer
        </Text>

        <Stack direction="row" spacing="10px">
          <SocialNetworks>
            <BsInstagram />
          </SocialNetworks>
          <SocialNetworks>
            <BsInstagram />
          </SocialNetworks>
          <SocialNetworks>
            <BsInstagram />
          </SocialNetworks>
          <SocialNetworks>
            <BsInstagram />
          </SocialNetworks>
        </Stack>
      </Card>
    </Box>
  );
}
