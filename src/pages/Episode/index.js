import { Flex, SimpleGrid} from "@chakra-ui/layout";
import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import BoxCard from "../../components/Box";
import InputSearch from "../../components/Input";
import Title from "../../components/Title";

export default function Episode() {
  const [episodes, setEpisodes] = useState([]);

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
      <Title title="Episodios" />
      <InputSearch Search={search} HandleSearch={handleSearch} />
      <Flex
        marginBottom="30px"
        display="grid"
        textAlign="center"
        justifyItems="center"
      >
        <Flex display="grid">
          <SimpleGrid
            templateColumns="repeat(2, 1fr)"
            gap={4}
            mt="30"
            columns={1}
            spacing={10}
          >
            <BoxCard Data={filteredEpisode} Path="/showEpisode" />
          </SimpleGrid>
        </Flex>
      </Flex>
    </>
  );
}
