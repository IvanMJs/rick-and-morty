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
    <Flex marginBottom="30px" display="grid" textAlign="center" justifyItems="center">
      <Flex mt="10">
        <Box
          maxW="sm"
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          bgColor="twitter.200"
        >
          <Text fontSize="50px" color="tomato">
            Se estreno: {episode.air_date}
          </Text>
          <Text fontSize="50px" color="tomato">
            Epidodio: {episode.episode}
          </Text>
          <Text fontSize="50px" color="tomato">
            Personajes: {episode.characters?.length}
          </Text>
        </Box>
      </Flex>
    </Flex>
  );
}
