import { Box, Flex } from "@chakra-ui/react";
import { LinearProgress } from "@material-ui/core";
import React, { ReactElement } from "react";
import { useIsFetching } from "react-query";
import { Header } from "./Header";

interface LayoutProps {
  icon: ReactElement;
  onIconClick(): void;
  title: string;
  children: ReactElement;
}

export const Layout = (props: LayoutProps) => {
  const { icon, onIconClick, title, children } = props;

  const isFetching = useIsFetching();

  return (
    <Flex
      flexDirection="column"
      backgroundColor="gray.100"
      minHeight="100vh"
      minWidth="100vw"
    >
      <Header icon={icon} onIconClick={onIconClick} title={title} />
      <Box position="relative">
        <Flex position="absolute" top="0" left="0" width="100%">
          {children}
        </Flex>
        {Boolean(isFetching) && <LinearProgress />}
      </Box>
    </Flex>
  );
};
