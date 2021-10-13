import { Flex, SimpleGrid } from "@chakra-ui/layout";
import axios from "axios";
import React, { useEffect, useState } from "react";
import BoxCard from "../../components/Box";
import Pagination from "../../components/Pagination";
import Title from "../../components/Title";
export default function Characters() {
  const [character, setCharacter] = useState([]);
  const [currentPage, setcurrentPage] = useState(1);
  const [postPerPage] = useState(4);
  
  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character`)
      .then((res) => {
        setCharacter(res.data.results);
      })
      
  }, []);
  const paginate = (postNumber) => setcurrentPage(postNumber);
  const firstText = currentPage * postPerPage;
  const indexText = firstText - postPerPage;
  const CurrentPost = character.slice(indexText, firstText);

  

  return (
    <>
      <Title title="Personajes" />
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
            <BoxCard Data={CurrentPost} Path="/showCharacter" />
          </SimpleGrid>
        </Flex>
        <Pagination
          postPerPage={postPerPage}
          totalPosts={character.length}
          paginate={paginate}
        />
      </Flex>
    </>
  );
}
