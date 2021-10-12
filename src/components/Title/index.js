import { Box, Stack, Text } from "@chakra-ui/layout";
import React from "react";
export default function Title({ title }) {
 
  return (
    <Stack
      textAlign="center"
      mt="30px"
      mb="10px"
      // bgImage="url(https://images5.alphacoders.com/876/876590.png)"
      // backgroundPosition="center"
    >
      <Text fontSize="50px" color="tomato">
        {title}
      </Text>
    </Stack>
  );
}
