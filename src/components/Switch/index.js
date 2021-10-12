import { IconButton } from "@chakra-ui/button";
import { Stack } from "@chakra-ui/layout";
import React from "react";
import { useColorMode } from "@chakra-ui/color-mode";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

export default function Switch() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Stack align="center">
        <IconButton
          bgColor="transparent"
          onClick={toggleColorMode}
          icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        ></IconButton>
      </Stack>
    </>
  );
}
