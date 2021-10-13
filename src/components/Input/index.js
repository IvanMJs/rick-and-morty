import { useColorMode } from "@chakra-ui/color-mode";
import { Input } from "@chakra-ui/input";
import { Flex } from "@chakra-ui/layout";
import React from "react";
export default function InputSearch({ Search, HandleSearch }) {
  const { colorMode } = useColorMode();
  return (
    <Flex>
      <Input
        color={colorMode === "light" ? "black" : "white"}
        margin="auto"
        maxWidth="80"
        textAlign="center"
        placeholder="Name"
        size="md"
        type="text"
        value={Search}
        onChange={HandleSearch}
      />
    </Flex>
  );
}
