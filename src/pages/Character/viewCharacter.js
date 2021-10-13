import { Image } from "@chakra-ui/image";
import { Box, Circle, Flex, Text } from "@chakra-ui/layout";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function ShowCharacter(props) {
  const [character, setCharacter] = useState([]);
  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/${props.location.state}`)
      .then((res) => {
        setCharacter(res.data);
      });
  }, [props.location.state]);

  return (
    <Flex display="grid" justifyItems="center">
      <Flex mt="10">
        <Box
          maxW="sm"
          borderRadius="lg"
          overflow="hidden"
          bgColor="rgb(60, 62, 68)"
          boxShadow="dark-lg"
        >
          <Image width="-webkit-fill-available" src={character.image} />
          <Flex display="grid" fontWeight="semibold" fontSize="20px" ml="5%">
            <Text fontWeight="bold" fontSize="30px" color="white">
              {character.name}
            </Text>
            <Text
              fontWeight="semibold"
              justify-content="center"
              display="flex"
              alignItems="center"
              textTransform="capitalize"
              fontSize="20px"
              color="white"
            >
              <Circle
                size="20px"
                bg={
                  character.status === "Alive"
                    ? "green.500"
                    : character.status === "unknown"
                    ? "gray.500"
                    : "tomato"
                }
              ></Circle>
              {character.status}
            </Text>

            <Text color="white">
              <Text fontWeight="medium" color="rgb(158, 158, 158)">
                Especie:
              </Text>
              {character.species}
            </Text>

            <Text color="white">
              <Text fontWeight="medium" color="rgb(158, 158, 158)">
                Sexo:
              </Text>
              {character.gender}
            </Text>

            <Text color="white">
              <Text fontWeight="medium" color="rgb(158, 158, 158)">
                Origen:
              </Text>
              {character.origin?.name}
            </Text>

            <Text color="white">
              <Text fontWeight="medium" color="rgb(158, 158, 158)">
                Episodios totales:
              </Text>
              {character.episode?.length}
            </Text>
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
}
