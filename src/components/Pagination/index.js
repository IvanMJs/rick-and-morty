import { Button } from "@chakra-ui/button";
import { HStack } from "@chakra-ui/layout";
import React from "react";

const Pagination = ({ totalPosts, postPerPage, paginate }) => {
  const postNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    postNumbers.push(i);
  }

  return (
    <>
      <HStack spacing="10px" mt="5vh" display="inline-list-item">
        {postNumbers?.map((number) => (
          <Button key={number}>
            <a href={paginate} onClick={() => paginate(number)}>
              {number}
            </a>
          </Button>
        ))}
      </HStack>
    </>
  );
};

export default Pagination;
