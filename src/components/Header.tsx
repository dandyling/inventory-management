import { Flex, Heading, IconButton } from "@chakra-ui/react";
import * as React from "react";
import { ReactElement } from "react";

interface HeaderProps {
  icon: ReactElement;
  onIconClick(): void;
  title: string;
  renderRightContent?: ReactElement;
}

export const Header = (props: HeaderProps) => {
  const { icon, onIconClick, title } = props;
  return (
    <Flex pt="2" px="2" alignItems="center">
      <IconButton
        variant="ghost"
        aria-label="menu"
        icon={icon}
        onClick={onIconClick}
      />
      <Heading
        as="h1"
        textTransform="uppercase"
        fontSize="lg"
        color="blackAlpha.800"
      >
        {title}
      </Heading>
    </Flex>
  );
};
