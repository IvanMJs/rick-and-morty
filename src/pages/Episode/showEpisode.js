import { Box, Flex, Text } from "@chakra-ui/layout";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function ShowEpisode(props) {
  const [episode, setEpisode] = useState([]);
  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/episode/${props.location.state}`)
      .then((res) => {
        setEpisode(res.data);
      });
  }, [props.location.state]);

  return (
    <Flex
      marginBottom="30px"
      display="grid"
      textAlign="center"
      justifyItems="center"
    >
      <Flex mt="30px" fontSize="8vh">
        <Text>{episode.name}</Text>
      </Flex>

      <Flex mt="10">
        <Box
          h="50vh"
          w="50vh"
          maxW="sm"
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          bgColor="rgb(60, 62, 68)"
        >
          <Text fontSize="3vh" color="white">
            <Text
              fontSize="10vh"
              fontWeight="medium"
              color="rgb(158, 158, 158)"
            >
              Estreno:
            </Text>
            {episode.air_date}
          </Text>
          <Text fontSize="3vh" color="white">
            <Text fontSize="6vh" fontWeight="medium" color="rgb(158, 158, 158)">
              Episodio:
            </Text>
            {episode.episode}
          </Text>
          <Text fontSize="3vh" color="white">
            <Text fontSize="6vh" fontWeight="medium" color="rgb(158, 158, 158)">
              Personajes:
            </Text>
            {episode.characters?.length}
          </Text>
        </Box>
      </Flex>
    </Flex>
  );
}
