import { Button } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { Input } from "@chakra-ui/input";
import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/layout";
import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Title from "../../components/Title";

export default function Episode() {
  const [episodes, setEpisodes] = useState([]);
  const { colorMode } = useColorMode();
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/episode`).then((res) => {
      setEpisodes(res.data.results);
    });
  }, []);

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const filteredEpisode = useMemo(
    () =>
      episodes.filter((ep) => {
        const episodes =
          ep.name.toLowerCase().includes(search.toLowerCase()) ||
          ep.episode.toLowerCase().includes(search.toLowerCase());

        return episodes;
      }),
    [episodes, search]
  );
  return (
    <>
      <Title title="Episode" />
      <Flex
        marginBottom="30px"
        display="grid"
        textAlign="center"
        justifyItems="center"
      >
        <Flex display="grid">
          <Input
            color={colorMode === "light" ? "black" : "white"}
            margin="auto"
            maxWidth="80"
            textAlign="center"
            placeholder="Name"
            size="md"
            type="text"
            value={search}
            onChange={handleSearch}
          />
          <SimpleGrid
            templateColumns="repeat(2, 1fr)"
            gap={4}
            mt="30"
            columns={1}
            spacing={10}
          >
            {filteredEpisode.map((ep, index) => (
              <Box
                key={index}
                maxW="sm"
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                bgColor="gray.600"
              >
                <Text
                  mt="20px"
                  marginBottom="30px"
                  fontSize="20px"
                  color="white"
                >
                  {ep.name}
                </Text>

                <Button mt="10px" marginBottom="20px">
                  <Link to={{ pathname: "/showEpisode", state: ep.id }}>
                    Character
                  </Link>
                </Button>
              </Box>
            ))}
          </SimpleGrid>
        </Flex>
      </Flex>
    </>
  );
}
