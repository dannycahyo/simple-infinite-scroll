import React, { useState, useEffect } from "react";
import Product from "./Product";
import { ProductType } from "./type";
import { Heading, Text, Box, Center, Button } from "@chakra-ui/react";

function App() {
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    const getProducts = async () => {
      const responseData = await fetch(`https://fakestoreapi.com/products`);
      const dataProduct = await responseData.json();
      setProducts(dataProduct);
    };
    getProducts();
  }, [setProducts]);

  const handleAddProducts = async () => {
    const responseData = await fetch(`https://fakestoreapi.com/products`);
    const dataProduct = await responseData.json();
    setProducts([...products, ...dataProduct]);
  };

  return (
    <Box>
      <Heading textAlign="center" size="2xl" mt="8">
        Simple Infinite Scroll Using React!
      </Heading>
      <Text textAlign="center" mt="2" fontSize="2xl">
        So here we have a bunch of products
      </Text>

      <Box pb="12">
        <Product products={products} />
        <Center>
          <Button colorScheme="teal" onClick={handleAddProducts}>
            See More!
          </Button>
        </Center>
      </Box>
    </Box>
  );
}

export default App;
