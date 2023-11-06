// import { Box, Stack, Text, useColorModeValue } from "@chakra-ui/react";
// import { Link } from "react-router-dom";

// interface ILinkPagesProps {
//   children: React.ReactNode;
//   label: string;
//   path: string;
// }

// export function LinkPages({ children, label, path }: ILinkPagesProps) {
//   const bg = useColorModeValue("#E1E8EF", "#2D3748");
//   const hoverBg = useColorModeValue("#E1E8EF80", "#E1E8EF10");
//   const textColor = useColorModeValue("#1A100380", "#E1E8EF");
//   const boxShadowColor = useColorModeValue("#1A100380", "#E1E8EF80");

//   return (
//     <Box
//       transition="background 0.3s ease-in-out"
//       background={bg}
//       _hover={{ background: hoverBg }}
//       boxShadow={`0px 0px 0px 0.25px ${boxShadowColor}`}
//       boxSize="60px"
//       borderRadius="20px"
//       display="flex"
//       alignItems="center"
//     >
//       <Link to={path} style={{ margin: 0, width: "100%" }}>
//         <Stack alignItems="center" justifyContent="center" color={textColor}>
//           {children}
//           <Text fontSize="10px" fontWeight={700}>
//             {label}
//           </Text>
//         </Stack>
//       </Link>
//     </Box>
//   );
// }

import { Box, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";

interface ILinkPagesProps {
  children: React.ReactNode;
  label: string;
  path: string;
}

export function LinkPages({ children, label, path }: ILinkPagesProps) {
  const bg = useColorModeValue("#E1E8EF", "#2D3748");
  const hoverBg = useColorModeValue("#E1E8EF80", "#E1E8EF10");
  const textColor = useColorModeValue("#1A100380", "#E1E8EF");
  const boxShadowColor = useColorModeValue("#1A100380", "#E1E8EF80");

  const location = useLocation();

  const isCurrentPath = location.pathname === path;

  return (
    <Box
      _hover={{ background: !isCurrentPath ? hoverBg : "" }}
      boxShadow={`0px 0px 0px 0.25px ${boxShadowColor}`}
      boxSize="60px"
      background={bg}
      borderRadius="20px"
      display="flex"
      alignItems="center"
      bgGradient={isCurrentPath ? "linear(to-r, cyan.300, cyan.600)" : ""}
      transition={isCurrentPath ? "background 0.3s ease-in-out" : ""}
    >
      <Link to={path} style={{ margin: 0, width: "100%" }}>
        <Stack alignItems="center" justifyContent="center" color={textColor}>
          {children}
          <Text fontSize="12px" fontWeight={700}>
            {label}
          </Text>
        </Stack>
      </Link>
    </Box>
  );
}
