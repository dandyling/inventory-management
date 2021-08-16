import {
  ChakraProvider,
  Flex,
  Heading,
  IconButton,
  theme,
} from "@chakra-ui/react";
import * as React from "react";
import { FaBars } from "react-icons/fa";
import { CurrentInventory } from "./CurrentInventory";

export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Flex
        flexDirection="column"
        backgroundColor="gray.100"
        minHeight="100vh"
        minWidth="100vw"
      >
        <Flex pt="2" px="2" alignItems="center">
          <IconButton variant="ghost" aria-label="menu" icon={<FaBars />} />
          <Heading
            as="h1"
            textTransform="uppercase"
            fontSize="lg"
            color="blackAlpha.800"
          >
            Training Institute Board
          </Heading>
        </Flex>
        <CurrentInventory />
      </Flex>
    </ChakraProvider>
  );
};
