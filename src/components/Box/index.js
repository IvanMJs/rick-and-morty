import { Link } from "react-router-dom";
import React from "react";
import { Box, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";

export default function BoxCard({ Data, Path }) {
  return Data.map((data, index) => (
    <Link to={{ pathname: Path, state: data.id }}>
      <Box
        key={index}
        maxW="sm"
        borderRadius="lg"
        overflow="hidden"
        bgColor="rgb(60, 62, 68)"
        boxShadow="dark-lg"
        _hover={{ bg: "blue.500", fontWeight: "bold" }}
      >
        <Image width="-webkit-fill-available" src={data.image} />
        <Text fontSize="50px" color="white">
          {data.name}
        </Text>
      </Box>
    </Link>
  ));
}
