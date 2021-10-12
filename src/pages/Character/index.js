import { useColorMode } from "@chakra-ui/color-mode";
import { Image } from "@chakra-ui/image";
import { Input } from "@chakra-ui/input";
import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/layout";
import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Title from "../../components/Title";
export default function Characters() {
  const [character, setCharacter] = useState([]);
  const { colorMode } = useColorMode();
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/character`).then((res) => {
      setCharacter(res.data.results);
    });
  }, []);

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const filteredCharacter = useMemo(
    () =>
      character.filter((ep) => {
        const character = ep.name.toLowerCase().includes(search.toLowerCase());

        return character;
      }),
    [character, search]
  );
  return (
    <>
      <Title title="Characters" />
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
            justifyItems="center"
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
            {filteredCharacter.map((ca, index) => (
              <Link to={{ pathname: "/showCharacter", state: ca.id }}>
                <Box
                  key={index}
                  maxW="sm"
                  borderRadius="lg"
                  overflow="hidden"
                  bgColor="rgb(60, 62, 68)"
                  boxShadow="dark-lg"
                  _hover={{ bg: "blue.500", fontWeight: "bold" }}
                >
                  <Image width="-webkit-fill-available" src={ca.image} />
                  <Text fontSize="50px" color="white">
                    {ca.name}
                  </Text>

                  {/* <Button backgroundColor="rgb(56 62 72)" marginBottom="10px">
                  <Link to={{ pathname: "/showCharacter", state: ca.id }}>
                    View Detail
                  </Link>
                </Button> */}
                </Box>
              </Link>
            ))}
          </SimpleGrid>
        </Flex>
      </Flex>
    </>
  );
}
