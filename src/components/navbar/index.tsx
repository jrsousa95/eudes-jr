import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Stack,
  Text,
} from "@chakra-ui/react";
import { AiOutlineHome } from "react-icons/ai";
import { BsJournalText, BsPersonWorkspace } from "react-icons/bs";
import { RiContactsBookLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export function NavBar() {
  const location = useLocation();
  const homepage = location.pathname === "/";
  const resumePage = location.pathname === "/resume";
  const workPage = location.pathname === "/work";
  const contactPage = location.pathname === "/contact";

  return (
    <Breadcrumb width={{ base: "full", md: "auto", lg: "auto" }}>
      <Stack
        direction={{ base: "column", md: "row", lg: "row" }}
        width={{ base: "full", md: "auto", lg: "auto" }}
        gap={{ base: "10px", md: "30px", lg: "30px" }}
      >
        <BreadcrumbItem width={{ base: "full", md: "auto", lg: "auto" }}>
          <BreadcrumbLink
            isCurrentPage
            as={Link}
            width={{ base: "full", md: "auto", lg: "auto" }}
            to="/"
          >
            <Button
              width={{ base: "full", md: "auto", lg: "auto" }}
              _hover={{ background: !homepage ? "cyan.500" : "" }}
              bgGradient={homepage ? "linear(to-r, cyan.400, cyan.500)" : ""}
              transition={homepage ? "background 0.3s ease-in-out" : ""}
            >
              <Stack
                direction="row"
                alignItems="center"
                width="100px"
                justifyContent="flex-start"
              >
                <AiOutlineHome fontSize="20px" />
                <Text>Home</Text>
              </Stack>
            </Button>
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem width={{ base: "full", md: "auto", lg: "auto" }}>
          <BreadcrumbLink
            width={{ base: "full", md: "auto", lg: "auto" }}
            as={Link}
            to="/resume"
          >
            <Button
              width={{ base: "full", md: "auto", lg: "auto" }}
              _hover={{ background: !resumePage ? "cyan.500" : "" }}
              bgGradient={resumePage ? "linear(to-r, cyan.400, cyan.500)" : ""}
              transition={resumePage ? "background 0.3s ease-in-out" : ""}
            >
              <Stack
                direction="row"
                alignItems="center"
                width="100px"
                justifyContent="flex-start"
              >
                <BsJournalText fontSize="20px" />
                <Text>Resume</Text>
              </Stack>
            </Button>
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem width={{ base: "full", md: "auto", lg: "auto" }}>
          <BreadcrumbLink
            width={{ base: "full", md: "auto", lg: "auto" }}
            as={Link}
            to="/work"
          >
            <Button
              width={{ base: "full", md: "auto", lg: "auto" }}
              _hover={{ background: !workPage ? "cyan.500" : "" }}
              bgGradient={workPage ? "linear(to-r, cyan.400, cyan.500)" : ""}
              transition={workPage ? "background 0.3s ease-in-out" : ""}
            >
              <Stack
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                width="100px"
              >
                <BsPersonWorkspace fontSize="20px" />
                <Text>Work</Text>
              </Stack>
            </Button>
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem width={{ base: "full", md: "auto", lg: "auto" }}>
          <BreadcrumbLink
            width={{ base: "full", md: "auto", lg: "auto" }}
            as={Link}
            to="/contact"
          >
            <Button
              width={{ base: "full", md: "auto", lg: "auto" }}
              _hover={{ background: !contactPage ? "cyan.500" : "" }}
              bgGradient={contactPage ? "linear(to-r, cyan.400, cyan.500)" : ""}
              transition={contactPage ? "background 0.3s ease-in-out" : ""}
            >
              <Stack
                direction="row"
                alignItems="center"
                width="100px"
                justifyContent="flex-start"
              >
                <RiContactsBookLine fontSize="20px" />
                <Text>Contact</Text>
              </Stack>
            </Button>
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Stack>
    </Breadcrumb>
  );
}
