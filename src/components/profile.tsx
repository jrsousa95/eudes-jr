import {
  Box,
  Button,
  Card,
  Heading,
  Image,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { AiOutlineMail } from "react-icons/ai";
import { BsGithub, BsInstagram, BsLinkedin, BsPhone } from "react-icons/bs";
import { FiDownload } from "react-icons/fi";
import { TbLocation } from "react-icons/tb";
import { Infos } from "../utils/infos";
import { SocialNetworksBox } from "../utils/socialNetworks";

export function Profile() {
  const bg = useColorModeValue("#F2F7FC", "#1A202C");

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
        flexShrink="0"
        borderRadius="20px"
        boxShadow="0px 0px 4px 0px rgba(0, 0, 0, 0.25)"
        display="flex"
        flexDirection="column"
        alignItems="center"
        marginTop="100px"
        padding="20px"
        gap="22px"
      >
        <Stack alignItems="center" spacing={1} marginTop="20px">
          <Heading
            fontFamily="Raleway"
            fontSize="28.42px"
            fontStyle="normal"
            fontWeight="700"
          >
            Eudes Júnior
          </Heading>

          <Text
            fontFamily="Raleway"
            fontSize="16px"
            fontStyle="normal"
            fontWeight="500"
          >
            FullStack Developer
          </Text>
        </Stack>

        <Stack direction="row" spacing="10px">
          <SocialNetworksBox>
            <Link href="https://www.instagram.com/eudesjr.dev/" target="_blank">
              <BsInstagram />
            </Link>
          </SocialNetworksBox>
          <SocialNetworksBox>
            <Link href="https://www.linkedin.com/in/eudes-jr/" target="_blank">
              <BsLinkedin />
            </Link>
          </SocialNetworksBox>
          <SocialNetworksBox>
            <Link href="https://github.com/jrsousa95" target="_blank">
              <BsGithub />
            </Link>
          </SocialNetworksBox>
        </Stack>

        <Box
          width="350px"
          height="auto"
          flexShrink="0"
          borderRadius="20px"
          background={bg}
          paddingBottom="30px"
        >
          <Infos label="Phone" value="+ 55 (85) 98672-0093">
            <BsPhone fontSize="14px" />
          </Infos>
          <Infos label="Email" value="juniorsousa_343@hotmail.com">
            <AiOutlineMail fontSize="14px" />
          </Infos>
          <Infos label="Location" value="Caucaia, CE - Brazil">
            <TbLocation fontSize="14px" />
          </Infos>

          <Box
            width="full"
            display="flex"
            justifyContent="center"
            marginTop="30px"
          >
            <Button size="sm" variant="outline" colorScheme="primary">
              <Stack direction="row" alignItems="center">
                <FiDownload />
                <Text>Download Resume</Text>
              </Stack>
            </Button>
          </Box>
        </Box>
      </Card>
    </Box>
  );
}
