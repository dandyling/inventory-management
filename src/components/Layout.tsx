import { Flex } from "@chakra-ui/react";
import React, { ReactElement } from "react";
import { Header } from "./Header";

interface LayoutProps {
  icon: ReactElement;
  onIconClick(): void;
  title: string;
  children: ReactElement;
}

export const Layout = (props: LayoutProps) => {
  const { icon, onIconClick, title, children } = props;
  return (
    <Flex
      flexDirection="column"
      backgroundColor="gray.100"
      minHeight="100vh"
      minWidth="100vw"
    >
      <Header icon={icon} onIconClick={onIconClick} title={title} />
      {children}
    </Flex>
  );
};
