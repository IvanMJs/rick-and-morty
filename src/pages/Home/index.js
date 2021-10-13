import { Flex, Text } from "@chakra-ui/layout";
import React from "react";
export default function Home() {
  return (
    <Flex mt="30px" justifyContent="center" display="flex">
      <Text fontSize="large" textAlign="center">
        Usando la api Rick and Morty utilizando React.
        <br/>
        Con hooks, props, reutilización de componentes.
        <br/>
        En proceso...
      </Text>
    </Flex>
  );
}
