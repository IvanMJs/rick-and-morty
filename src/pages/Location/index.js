import { Flex, SimpleGrid } from "@chakra-ui/layout";
import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";

import BoxCard from "../../components/Box";
import InputSearch from "../../components/Input";
import Title from "../../components/Title";
export default function Location() {
  const [location, setLocation] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/location`).then((res) => {
      setLocation(res.data.results);
    });
  }, []);

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const filteredLocation = useMemo(
    () =>
      location.filter((ep) => {
        const character = ep.name.toLowerCase().includes(search.toLowerCase());

        return character;
      }),
    [location, search]
  );
  return (
    <>
      <Title title="Lugares" />
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
            <BoxCard Data={filteredLocation} Path="/showLocation" />
          </SimpleGrid>
        </Flex>
      </Flex>
    </>
  );
}
